import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetsDir = path.join(process.cwd(), "public", "assets");

const serviceIcons = [
  "ac-technician.png",
  "automotive-mechanic.png",
  "babysitter-nanny.png",
  "bawarchi-cook.png",
  "beautician.png",
  "salon-worker.png",
  "blinds-curtains-wallpapers.png",
  "caretaker.png",
  "carpenter-woodworker.png",
  "carpet-cleaning-laundry.png",
  "cctv-fence-installer.png",
  "ceiling-work.png",
  "driver.png",
  "electrician.png",
  "fast-food-crew.png",
  "gardener-mali.png",
  "housekeeping.png",
  "jamadar-sanitary-worker.png",
  "key-maker.png",
  "maid-kamwali.png",
  "mason-helper.png",
  "office-boy.png",
  "painter.png",
  "pest-control.png",
  "plumber.png",
  "security-guard.png",
  "sofa-carpet.png",
  "solar-technician.png",
  "sweeper.png",
  "tyre-specialist.png",
  "ups-generator.png",
  "welding-worker.png",
  "staffs.png",
];

let savedBytes = 0;

for (const file of serviceIcons) {
  const filePath = path.join(assetsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`skip (missing): ${file}`);
    continue;
  }

  const before = fs.statSync(filePath).size;
  const buffer = await sharp(filePath)
    .resize(140, 140, { fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  if (buffer.length < before) {
    const tempPath = `${filePath}.tmp`;
    fs.writeFileSync(tempPath, buffer);
    fs.renameSync(tempPath, filePath);
    savedBytes += before - buffer.length;
    console.log(`${file}: ${Math.round(before / 1024)}KB -> ${Math.round(buffer.length / 1024)}KB`);
  } else {
    console.log(`${file}: kept original (${Math.round(before / 1024)}KB)`);
  }
}

console.log(`Total saved: ${Math.round(savedBytes / 1024)}KB`);
