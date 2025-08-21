const fs = require("fs").promises;
const path = require("path");
const glob = require("fast-glob");
const { optimize } = require("svgo");

const ICONS_DIR = path.join(__dirname, "../src/app/icon");
const OUTPUT_DIR = path.join(__dirname, "../public");
const SPRITE_PATH = path.join(OUTPUT_DIR, "sprite.svg");

async function generateSprite() {
  console.log("🔍 Поиск SVG файлов в:", ICONS_DIR);

  try {
    // Проверяем существование директории
    await fs.access(ICONS_DIR);
    const files = await glob(["src/app/icon/*.svg"], {
      absolute: true,
      cwd: process.cwd(),
    });

    console.log("📁 Найдено файлов:", files.length);

    if (files.length === 0) {
      throw new Error("❌ Не найдено SVG файлов в папке icon/");
    }

    // Создаем выходную директорию
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Начинаем создавать SVG спрайт
    let spriteContent = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n`;

    for (const file of files) {
      const fileName = path.basename(file, ".svg");
      console.log(`📝 Обрабатываю: ${fileName}`);

      // Читаем содержимое файла
      let content = await fs.readFile(file, "utf-8");

      // Заменяем fill на currentColor
      content = content.replace(/fill="[^"]*"/g, 'fill="currentColor"');

      // Оптимизируем SVG
      const result = optimize(content, {
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
        ],
      });

      // Извлекаем содержимое SVG и viewBox
      const svgMatch = result.data.match(/<svg[^>]*>(.*)<\/svg>/s);
      if (svgMatch) {
        const innerContent = svgMatch[1];

        // Извлекаем viewBox из оригинального SVG
        const viewBoxMatch = result.data.match(/viewBox="([^"]*)"/);
        const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

        spriteContent += `  <symbol id="${fileName}" viewBox="${viewBox}">${innerContent}</symbol>\n`;
      } else {
        console.warn(`⚠️ Не удалось извлечь содержимое из ${fileName}`);
      }
    }

    spriteContent += "</svg>";

    // Записываем спрайт
    await fs.writeFile(SPRITE_PATH, spriteContent, "utf-8");
    console.log("✅ SVG спрайт успешно создан:", SPRITE_PATH);
    console.log(`📊 Обработано иконок: ${files.length}`);
  } catch (error) {
    console.error("❌ Ошибка:", error.message);
    process.exit(1);
  }
}

generateSprite();
