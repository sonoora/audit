import { access } from "node:fs/promises";

const required = [
  "index.html",
  "api/health.js",
  "api/ready.js",
  "api/events.js",
  "vercel.json"
];

for (const file of required) {
  await access(new URL(`../${file}`, import.meta.url));
}

console.log("audit validation passed");
