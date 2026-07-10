const paths = [
  "/services",
  "/compnies",
  "/compnies/ac-technician",
  "/compnies/electrician",
  "/services/ac-technician",
  "/services/electrician",
  "/blogs",
  "/e-center",
  "/",
  "/about-us",
];
const base = process.argv[2] || "http://localhost:3002";

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function jsonLdBytes(html) {
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi;
  const matches = html.match(re) || [];
  return matches.reduce((n, s) => n + s.length, 0);
}

(async () => {
  console.log("Page | words | ratio% | jsonld KB | html KB");
  let lowWords = 0;
  let lowRatio = 0;
  for (const path of paths) {
    const html = await (await fetch(base + path)).text();
    const text = stripHtml(html);
    const words = text.split(" ").filter(Boolean).length;
    const ratio = (text.length / html.length) * 100;
    const jd = jsonLdBytes(html) / 1024;
    if (words < 200) lowWords++;
    if (ratio < 10) lowRatio++;
    console.log(
      `${path} | ${words} | ${ratio.toFixed(1)} | ${jd.toFixed(1)} | ${(html.length / 1024).toFixed(0)}`
    );
  }
  console.log(`Under 200 words: ${lowWords}/${paths.length}`);
  console.log(`Under 10% ratio: ${lowRatio}/${paths.length}`);
})();
