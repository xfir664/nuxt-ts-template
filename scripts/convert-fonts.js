// scripts/convert-fonts.js
import { fileURLToPath } from "node:url";
import { dirname, join, extname, basename, relative } from "node:path";
import fs from "fs";
import glob from "fast-glob";
import ttf2woff from "ttf2woff";

// 🔁 Заменяем __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Конфигурация
const INPUT_DIR = join(__dirname, "../raw/fonts");
const OUTPUT_DIR = join(__dirname, "../app/assets/fonts");
const SUPPORTED_FORMATS = [".ttf", ".otf", ".woff", ".woff2", ".eot", ".svg"];

async function convertFont(inputFile, outputDir, fileName) {
  const ext = extname(fileName).toLowerCase();
  const baseName = basename(fileName, ext); // ✅ Правильно удаляем расширение

  console.log(`📝 Конвертирую: ${fileName}`);

  try {
    await fs.promises.mkdir(outputDir, { recursive: true });

    let convertedCount = 0;
    const inputBuffer = await fs.promises.readFile(inputFile);

    let ttf2woff2;
    try {
      ttf2woff2 = (await import("ttf2woff2")).default;
    } catch (error) {
      console.log(`  ⚠️ ttf2woff2 недоступен: ${error.message}`);
      ttf2woff2 = null;
    }

    if (ext === ".ttf") {
      const ttfBuffer = inputBuffer;
      const ttfPath = join(outputDir, `${baseName}.ttf`);
      await fs.promises.writeFile(ttfPath, ttfBuffer);
      console.log(`  ✅ Создан: ${baseName}.ttf`);
      convertedCount++;

      try {
        const woffBuffer = ttf2woff(ttfBuffer);
        const woffPath = join(outputDir, `${baseName}.woff`);
        await fs.promises.writeFile(woffPath, woffBuffer);
        console.log(`  ✅ Создан: ${baseName}.woff`);
        convertedCount++;
      } catch (error) {
        console.log(`  ⚠️ Не удалось создать WOFF: ${error.message}`);
      }

      if (ttf2woff2) {
        try {
          const woff2Buffer = ttf2woff2(ttfBuffer);
          const woff2Path = join(outputDir, `${baseName}.woff2`);
          await fs.promises.writeFile(woff2Path, woff2Buffer);
          console.log(`  ✅ Создан: ${baseName}.woff2`);
          convertedCount++;
        } catch (error) {
          console.log(`  ⚠️ Не удалось создать WOFF2: ${error.message}`);
        }
      }
    } else if (ext === ".otf") {
      const ttfPath = join(outputDir, `${baseName}.ttf`);
      await fs.promises.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      try {
        const woffBuffer = ttf2woff(inputBuffer);
        const woffPath = join(outputDir, `${baseName}.woff`);
        await fs.promises.writeFile(woffPath, woffBuffer);
        console.log(`  ✅ Создан: ${baseName}.woff`);
        convertedCount++;
      } catch (error) {
        console.log(`  ⚠️ Не удалось создать WOFF`);
      }

      if (ttf2woff2) {
        try {
          const woff2Buffer = ttf2woff2(inputBuffer);
          const woff2Path = join(outputDir, `${baseName}.woff2`);
          await fs.promises.writeFile(woff2Path, woff2Buffer);
          console.log(`  ✅ Создан: ${baseName}.woff2`);
          convertedCount++;
        } catch (error) {
          console.log(`  ⚠️ Не удалось создать WOFF2`);
        }
      }
    } else if (ext === ".woff") {
      const woffPath = join(outputDir, `${baseName}.woff`);
      await fs.promises.writeFile(woffPath, inputBuffer);
      console.log(`  ✅ Скопирован: ${baseName}.woff`);
      convertedCount++;

      const ttfPath = join(outputDir, `${baseName}.ttf`);
      await fs.promises.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      const woff2Path = join(outputDir, `${baseName}.woff2`);
      await fs.promises.writeFile(woff2Path, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.woff2`);
      convertedCount++;
    } else if (ext === ".woff2") {
      const woff2Path = join(outputDir, `${baseName}.woff2`);
      await fs.promises.writeFile(woff2Path, inputBuffer);
      console.log(`  ✅ Скопирован: ${baseName}.woff2`);
      convertedCount++;

      const ttfPath = join(outputDir, `${baseName}.ttf`);
      await fs.promises.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      const woffPath = join(outputDir, `${baseName}.woff`);
      await fs.promises.writeFile(woffPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.woff`);
      convertedCount++;
    } else {
      const ttfPath = join(outputDir, `${baseName}.ttf`);
      await fs.promises.writeFile(ttfPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.ttf`);
      convertedCount++;

      const woffPath = join(outputDir, `${baseName}.woff`);
      await fs.promises.writeFile(woffPath, inputBuffer);
      console.log(`  ✅ Скопирован как: ${baseName}.woff`);
      convertedCount++;

      const woff2Path = join(outputDir, `${baseName}.woff2`);
      await fs.promises.writeFile(woff2Path, inputBuffer);
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
    await fs.promises.access(INPUT_DIR);
    await fs.promises.mkdir(OUTPUT_DIR, { recursive: true });

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
      const fileName = basename(file); // ✅
      const relativePath = relative(INPUT_DIR, file); // ✅
      const outputSubDir = dirname(relativePath); // ✅
      const outputPath = join(OUTPUT_DIR, outputSubDir); // ✅

      const success = await convertFont(file, outputPath, fileName);

      if (success) {
        processedCount++;
        totalConverted += 3;
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

// Запуск
convertFonts();
