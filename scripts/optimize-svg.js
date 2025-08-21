const fs = require("fs").promises;
const path = require("path");
const glob = require("fast-glob");
const { optimize } = require("svgo");

// Конфигурация
const INPUT_DIR = path.join(__dirname, "../raw/img");
const OUTPUT_DIR = path.join(__dirname, "../src/app/img");

// Конфигурация SVGO
const svgoConfig = {
  plugins: [
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeTitle",
    "removeDesc",
    "removeUselessDefs",
    "removeEditorsNSData",
    "removeEmptyAttrs",
    "removeHiddenElems",
    "removeEmptyText",
    "removeEmptyContainers",
    "cleanupEnableBackground",
    "convertStyleToAttrs",
    "convertColors",
    "convertPathData",
    "convertTransform",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "cleanupEnableBackground",
    "removeRasterImages",
    "removeUselessDefs",
    "cleanupNumericValues",
    "cleanupListOfValues",
    "convertColors",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "cleanupEnableBackground",
    "removeHiddenElems",
    "removeEmptyText",
    "convertShapeToPath",
    "convertEllipseToCircle",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    "collapseGroups",
    "convertPathData",
    "convertTransform",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "mergePaths",
    "removeUnusedNS",
    "sortDefsChildren",
    "removeTitle",
    "removeDesc",
  ],
  floatPrecision: 2, // 2 знака после запятой
};

async function optimizeSVG(inputFile, outputDir, fileName) {
  const baseName = path.basename(fileName, path.extname(fileName));

  console.log(`📝 Оптимизирую: ${fileName}`);

  try {
    // Создаем выходную директорию
    await fs.mkdir(outputDir, { recursive: true });

    // Читаем исходный файл
    const inputContent = await fs.readFile(inputFile, "utf-8");

    // Оптимизируем SVG
    const result = optimize(inputContent, svgoConfig);

    // Создаем выходной файл
    const outputPath = path.join(outputDir, `${baseName}.svg`);
    await fs.writeFile(outputPath, result.data, "utf-8");

    // Вычисляем размеры
    const originalSize = Buffer.byteLength(inputContent, "utf-8");
    const optimizedSize = Buffer.byteLength(result.data, "utf-8");
    const savings = (
      ((originalSize - optimizedSize) / originalSize) *
      100
    ).toFixed(1);

    console.log(`  ✅ Создан: ${baseName}.svg`);
    console.log(
      `  📊 Размер: ${originalSize} → ${optimizedSize} байт (экономия: ${savings}%)`
    );

    return {
      success: true,
      originalSize,
      optimizedSize,
      savings: parseFloat(savings),
    };
  } catch (error) {
    console.error(`❌ Ошибка при оптимизации ${fileName}:`, error.message);
    return { success: false };
  }
}

async function optimizeSVGs() {
  console.log("🔍 Поиск SVG файлов в:", INPUT_DIR);

  try {
    // Проверяем существование входной директории
    await fs.access(INPUT_DIR);

    // Создаем выходную директорию
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Ищем все SVG файлы
    const files = await glob(["raw/img/**/*.svg"], {
      absolute: true,
      cwd: process.cwd(),
    });

    console.log("📁 Найдено файлов:", files.length);

    if (files.length === 0) {
      throw new Error("❌ Не найдено SVG файлов в папке raw/img/");
    }

    let processedCount = 0;
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let totalSavings = 0;

    for (const file of files) {
      const fileName = path.basename(file);
      const relativePath = path.relative(INPUT_DIR, file);
      const outputSubDir = path.dirname(relativePath);
      const outputPath = path.join(OUTPUT_DIR, outputSubDir);

      const result = await optimizeSVG(file, outputPath, fileName);

      if (result.success) {
        processedCount++;
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.optimizedSize;
        totalSavings += result.savings;
      }
    }

    const averageSavings = (totalSavings / processedCount).toFixed(1);
    const totalSavingsPercent = (
      ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) *
      100
    ).toFixed(1);

    console.log("\n🎉 Оптимизация завершена!");
    console.log(`📊 Обработано файлов: ${processedCount}`);
    console.log(
      `📊 Общий размер: ${(totalOriginalSize / 1024).toFixed(1)}KB → ${(
        totalOptimizedSize / 1024
      ).toFixed(1)}KB`
    );
    console.log(`📊 Общая экономия: ${totalSavingsPercent}%`);
    console.log(`📊 Средняя экономия на файл: ${averageSavings}%`);
    console.log(`📁 Результат сохранен в: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error("❌ Ошибка:", error.message);
    process.exit(1);
  }
}

// Основная функция
async function main() {
  await optimizeSVGs();
}

main();
