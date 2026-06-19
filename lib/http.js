const crypto = require("node:crypto");

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify(payload));
}

async function readJson(req, limitBytes = 1024 * 1024) {
  const chunks = [];
  let total = 0;

  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    total += buffer.length;
    if (total > limitBytes) {
      const error = new Error("Body too large");
      error.code = "BODY_TOO_LARGE";
      throw error;
    }
    chunks.push(buffer);
  }

  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function eventHash(payload) {
  return crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
}

module.exports = {
  eventHash,
  readJson,
  sendJson
};
