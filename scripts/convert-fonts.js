const fs = require("fs").promises;
const path = require("path");
const glob = require("fast-glob");
const ttf2woff = require("ttf2woff");

// Конфигурация
const INPUT_DIR = path.join(__dirname, "../raw/fonts");
const OUTPUT_DIR = path.join(__dirname, "../src/app/fonts");
const SUPPORTED_FORMATS = [".ttf", ".otf", ".woff", ".woff2", ".eot", ".svg"];

async function convertFont(inputFile, outputDir, fileName) {
  const baseName = path.basename(fileName, path.extname(fileName));
  const ext = path.extname(fileName).toLowerCase();

  console.log(`📝 Конвертирую: ${fileName}`);

  try {
    // Создаем выходную директорию
    await fs.mkdir(outputDir, { recursive: true });

    let convertedCount = 0;

    // Читаем исходный файл
    const inputBuffer = await fs.readFile(inputFile);

    // Динамически импортируем ttf2woff2
    let ttf2woff2;
    try {
      ttf2woff2 = (await import("ttf2woff2")).default;
    } catch (error) {
      console.log(`  ⚠️ ttf2woff2 недоступен: ${error.message}`);
      ttf2woff2 = null;
    }

    // Для всех форматов создаем TTF, WOFF и WOFF2
    if (ext === ".ttf") {
      // Если это уже TTF, используем его для конвертации
      const ttfBuffer = inputBuffer;

      // Создаем TTF (копируем оригинал)
      const ttfPath = path.join(outputDir, `${baseName}.ttf`);
      await fs.writeFile(ttfPath, ttfBuffer);
      console.log(`  ✅ Создан: ${baseName}.ttf`);
      convertedCount++;

      // Конвертируем в WOFF
      try {
        const woffBuffer = ttf2woff(ttfBuffer);
        const woffPath = path.join(outputDir, `${baseName}.woff`);
        await fs.writeFile(woffPath, woffBuffer);
        console.log(`  ✅ Создан: ${baseName}.woff`);
        convertedCount++;
      } catch (error) {
        console.log(
          `  ⚠️ Не удалось создать WOFF для ${fileName}: ${error.message}`
        );
      }

      // Конвертируем в WOFF2
      if (ttf2woff2) {
        try {
          const woff2Buffer = ttf2woff2(ttfBuffer);
          const woff2Path = path.join(outputDir, `${baseName}.woff2`);
          await fs.writeFile(woff2Path, woff2Buffer);
          console.log(`  ✅ Создан: ${baseName}.woff2`);
          convertedCount++;
        } catch (error) {
          console.log(
            `  ⚠️ Не удалось создать WOFF2 для ${fileName}: ${error.message}`
          );
        }
      }
    } else if (ext === ".otf") {
      // Для OTF файлов - копируем как TTF и создаем WOFF и WOFF2
      const ttfPath = path.join(outputDir, `${baseName}.ttf`);
      await fs.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      // Создаем WOFF из TTF
      try {
        const woffBuffer = ttf2woff(inputBuffer);
        const woffPath = path.join(outputDir, `${baseName}.woff`);
        await fs.writeFile(woffPath, woffBuffer);
        console.log(`  ✅ Создан: ${baseName}.woff`);
        convertedCount++;
      } catch (error) {
        console.log(`  ⚠️ Не удалось создать WOFF для ${fileName}`);
      }

      // Создаем WOFF2 из TTF
      if (ttf2woff2) {
        try {
          const woff2Buffer = ttf2woff2(inputBuffer);
          const woff2Path = path.join(outputDir, `${baseName}.woff2`);
          await fs.writeFile(woff2Path, woff2Buffer);
          console.log(`  ✅ Создан: ${baseName}.woff2`);
          convertedCount++;
        } catch (error) {
          console.log(`  ⚠️ Не удалось создать WOFF2 для ${fileName}`);
        }
      }
    } else if (ext === ".woff") {
      // Для WOFF файлов - копируем как есть и создаем TTF и WOFF2
      const woffPath = path.join(outputDir, `${baseName}.woff`);
      await fs.writeFile(woffPath, inputBuffer);
      console.log(`  ✅ Скопирован: ${baseName}.woff`);
      convertedCount++;

      // Создаем TTF (копируем как TTF)
      const ttfPath = path.join(outputDir, `${baseName}.ttf`);
      await fs.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      // Создаем WOFF2 (копируем как WOFF2)
      const woff2Path = path.join(outputDir, `${baseName}.woff2`);
      await fs.writeFile(woff2Path, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.woff2`);
      convertedCount++;
    } else if (ext === ".woff2") {
      // Для WOFF2 файлов - копируем как есть и создаем TTF и WOFF
      const woff2Path = path.join(outputDir, `${baseName}.woff2`);
      await fs.writeFile(woff2Path, inputBuffer);
      console.log(`  ✅ Скопирован: ${baseName}.woff2`);
      convertedCount++;

      // Создаем TTF (копируем как TTF)
      const ttfPath = path.join(outputDir, `${baseName}.ttf`);
      await fs.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      // Создаем WOFF (копируем как WOFF)
      const woffPath = path.join(outputDir, `${baseName}.woff`);
      await fs.writeFile(woffPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.woff`);
      convertedCount++;
    } else {
      // Для других форматов (EOT, SVG) - копируем как TTF, WOFF и WOFF2
      const ttfPath = path.join(outputDir, `${baseName}.ttf`);
      await fs.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      const woffPath = path.join(outputDir, `${baseName}.woff`);
      await fs.writeFile(woffPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.woff`);
      convertedCount++;

      const woff2Path = path.join(outputDir, `${baseName}.woff2`);
      await fs.writeFile(woff2Path, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.woff2`);
      convertedCount++;
    }

    console.log(`  📊 Всего создано файлов: ${convertedCount}`);
    return true;
  } catch (error) {
    console.error(`❌ Ошибка при конвертации ${fileName}:`, error.message);
    return false;
  }
}

async function convertFonts() {
  console.log("🔍 Поиск шрифтов в:", INPUT_DIR);

  try {
    // Проверяем существование входной директории
    await fs.access(INPUT_DIR);

    // Создаем выходную директорию
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Ищем все поддерживаемые шрифты
    const patterns = SUPPORTED_FORMATS.map(
      (format) => `raw/fonts/**/*${format}`
    );
    const files = await glob(patterns, {
      absolute: true,
      cwd: process.cwd(),
    });

    console.log("📁 Найдено файлов:", files.length);

    if (files.length === 0) {
      throw new Error("❌ Не найдено шрифтов в папке raw/fonts/");
    }

    let processedCount = 0;
    let totalConverted = 0;

    for (const file of files) {
      const fileName = path.basename(file);
      const relativePath = path.relative(INPUT_DIR, file);
      const outputSubDir = path.dirname(relativePath);
      const outputPath = path.join(OUTPUT_DIR, outputSubDir);

      const success = await convertFont(file, outputPath, fileName);

      if (success) {
        processedCount++;
        totalConverted += 3; // TTF + WOFF + WOFF2
      }
    }

    console.log("\n🎉 Конвертация завершена!");
    console.log(`📊 Обработано файлов: ${processedCount}`);
    console.log(`📊 Создано файлов шрифтов: ${totalConverted}`);
    console.log(`📁 Результат сохранен в: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error("❌ Ошибка:", error.message);
    process.exit(1);
  }
}

// Основная функция
async function main() {
  await convertFonts();
}

main();
