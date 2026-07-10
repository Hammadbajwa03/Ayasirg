import fs from "fs";
import path from "path";

const servicesDir = path.join(process.cwd(), "src", "app", "services");
const skip = new Set(["lahore", "karachi", "islamabad", "page.jsx"]);

const dirs = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !skip.has(d.name))
  .map((d) => d.name);

let updated = 0;

for (const dir of dirs) {
  const filePath = path.join(servicesDir, dir, "page.jsx");
  if (!fs.existsSync(filePath)) continue;

  let src = fs.readFileSync(filePath, "utf8");
  if (!src.includes("const faqSchema")) continue;

  const start = src.indexOf("  const faqSchema = ");
  if (start === -1) continue;

  const end = src.indexOf("\n  return (", start);
  if (end === -1) continue;

  src = src.slice(0, start) + src.slice(end);

  src = src.replace(
    /\s*\{\/\* FAQ Schema Injection for Google Rich Results \*\/\}\s*<script[\s\S]*?dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(faqSchema\) \}\}\s*\/?>\s*/m,
    "\n"
  );

  fs.writeFileSync(filePath, src);
  updated += 1;
  console.log("updated:", dir);
}

console.log(`Done. ${updated} files updated.`);
