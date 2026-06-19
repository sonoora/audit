const { sendJson } = require("../lib/http");

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    return sendJson(res, 405, { ok: false, error: "METHOD_NOT_ALLOWED" });
  }

  return sendJson(res, 200, {
    ok: true,
    service: "sonoora-audit",
    status: "healthy",
    runtime: "vercel",
    timestamp: new Date().toISOString()
  });
};
