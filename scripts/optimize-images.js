import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imgDir = path.resolve(__dirname, "../public/images");

async function optimize() {
  const files = fs.readdirSync(imgDir).filter((f) => f.endsWith(".jpg"));
  let totalOrig = 0;
  let totalWebp = 0;
  let totalJpg = 0;
  const placeholders = {};

  console.log("Analyzing and optimizing images...");

  for (const f of files) {
    const inputPath = path.join(imgDir, f);
    const origStat = fs.statSync(inputPath);
    totalOrig += origStat.size;

    const baseName = path.parse(f).name;
    const webpPath = path.join(imgDir, `${baseName}.webp`);

    const inputBuffer = fs.readFileSync(inputPath);
    const meta = await sharp(inputBuffer).metadata();

    // 1200px max width is optimal for 2x retina display on any container in this layout
    const targetWidth = Math.min(meta.width || 1200, 1200);

    // Generate WebP with high quality compression
    const webpBuffer = await sharp(inputBuffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();

    fs.writeFileSync(webpPath, webpBuffer);
    totalWebp += webpBuffer.length;

    // Also optimize the fallback JPEG (mozjpeg progressive compression)
    const jpgBuffer = await sharp(inputBuffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true, progressive: true })
      .toBuffer();

    fs.writeFileSync(inputPath, jpgBuffer);
    totalJpg += jpgBuffer.length;

    // Generate ultra-lightweight blur placeholder (~300 bytes)
    const placeholderBuffer = await sharp(inputBuffer)
      .resize(24, 16, { fit: "cover" })
      .blur(1.5)
      .webp({ quality: 20 })
      .toBuffer();

    placeholders[baseName] = `data:image/webp;base64,${placeholderBuffer.toString("base64")}`;

    console.log(
      `${f.padEnd(16)}: ${(origStat.size / 1024).toFixed(0)} KB -> WebP: ${(webpBuffer.length / 1024).toFixed(0)} KB, Placeholder: ${placeholderBuffer.length} B`
    );
  }

  const placeholderFile = path.resolve(__dirname, "../src/data/placeholders.js");
  fs.writeFileSync(
    placeholderFile,
    `// Auto-generated ultra-lightweight blur placeholders\nexport const placeholders = ${JSON.stringify(placeholders, null, 2)};\n`
  );

  console.log("--------------------------------------------------");
  console.log(`Original total : ${(totalOrig / 1024).toFixed(0)} KB`);
  console.log(`WebP total     : ${(totalWebp / 1024).toFixed(0)} KB (-${Math.round((1 - totalWebp / totalOrig) * 100)}%)`);
  console.log(`JPG total      : ${(totalJpg / 1024).toFixed(0)} KB (-${Math.round((1 - totalJpg / totalOrig) * 100)}%)`);
  console.log(`Generated placeholders at ${placeholderFile}`);
}

optimize().catch(console.error);
