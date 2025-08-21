const fs = require("fs").promises;
const path = require("path");
const glob = require("fast-glob");
const sharp = require("sharp");

// Конфигурация
const INPUT_DIR = path.join(__dirname, "../raw/img");
const OUTPUT_DIR = path.join(__dirname, "../src/app/img");
const SUPPORTED_FORMATS = [".jpg", ".jpeg", ".png", ".bmp", ".tiff", ".webp"];
const QUALITY = 80; // Качество WebP (0-100)
const RETINA_SCALES = [1, 2]; // 1x и 2x

async function optimizeImages() {
  console.log("🔍 Поиск изображений в:", INPUT_DIR);

  try {
    // Проверяем существование входной директории
    await fs.access(INPUT_DIR);

    // Создаем выходную директорию
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Ищем все поддерживаемые изображения
    const patterns = SUPPORTED_FORMATS.map((format) => `raw/img/**/*${format}`);
    const files = await glob(patterns, {
      absolute: true,
      cwd: process.cwd(),
    });

    console.log("📁 Найдено файлов:", files.length);

    if (files.length === 0) {
      throw new Error("❌ Не найдено изображений в папке img/");
    }

    let processedCount = 0;
    let totalOptimized = 0;

    for (const file of files) {
      const fileName = path.basename(file, path.extname(file));
      const relativePath = path.relative(INPUT_DIR, file);
      const outputSubDir = path.dirname(relativePath);
      const outputPath = path.join(OUTPUT_DIR, outputSubDir);

      // Создаем поддиректории если нужно
      await fs.mkdir(outputPath, { recursive: true });

      console.log(`📝 Обрабатываю: ${fileName}`);

      try {
        // Загружаем изображение
        const image = sharp(file);
        const metadata = await image.metadata();

        // Обрабатываем для каждого масштаба ретины
        for (const scale of RETINA_SCALES) {
          const suffix = scale === 1 ? "@1x" : "@2x";
          const outputFileName = `${fileName}${suffix}.webp`;
          const outputFilePath = path.join(outputPath, outputFileName);

          // Вычисляем новые размеры
          const newWidth = Math.round(metadata.width * scale);
          const newHeight = Math.round(metadata.height * scale);

          // Оптимизируем и конвертируем в WebP
          await image
            .resize(newWidth, newHeight, {
              fit: "inside",
              withoutEnlargement: true,
              kernel: sharp.kernel.lanczos3,
            })
            .webp({
              quality: QUALITY,
              effort: 6, // Уровень сжатия (0-6)
              nearLossless: false,
              smartSubsample: true,
            })
            .toFile(outputFilePath);

          console.log(
            `  ✅ Создан: ${outputFileName} (${newWidth}x${newHeight})`
          );
          totalOptimized++;
        }

        processedCount++;
      } catch (error) {
        console.error(`❌ Ошибка при обработке ${fileName}:`, error.message);
      }
    }

    console.log("\n🎉 Оптимизация завершена!");
    console.log(`📊 Обработано файлов: ${processedCount}`);
    console.log(`📊 Создано WebP файлов: ${totalOptimized}`);
    console.log(`📁 Результат сохранен в: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error("❌ Ошибка:", error.message);
    process.exit(1);
  }
}

// Основная функция
async function main() {
  await optimizeImages();
}

main();
