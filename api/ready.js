const { sendJson } = require("../lib/http");

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    return sendJson(res, 405, { ok: false, error: "METHOD_NOT_ALLOWED" });
  }

  return sendJson(res, 200, {
    ok: true,
    service: "sonoora-audit",
    phase: "shell",
    checks: [
      { name: "routing", ok: true },
      { name: "durable-audit-store", ok: false, expected: false, note: "Audit DB/event stream are intentionally not wired in the first shell deploy." },
      { name: "auth", ok: false, expected: false, note: "Internal access control must be added before real audit evidence is exposed." }
    ],
    timestamp: new Date().toISOString()
  });
};
