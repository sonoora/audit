const { eventHash, readJson, sendJson } = require("../lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return sendJson(res, 405, { ok: false, error: "METHOD_NOT_ALLOWED" });
  }

  try {
    const payload = await readJson(req);
    const normalized = {
      spay_id: payload.spay_id || null,
      action: payload.action || "unknown",
      actor_type: payload.actor_type || "unknown",
      status: payload.status || "received",
      provider: payload.provider || null,
      provider_event_id: payload.provider_event_id || null,
      amount: payload.amount || null,
      currency: payload.currency || null
    };

    return sendJson(res, 202, {
      ok: true,
      accepted: true,
      persisted: false,
      service: "sonoora-audit",
      eventHash: eventHash(payload),
      normalized,
      receivedAt: new Date().toISOString(),
      note: "Shell deploy only. Add immutable audit storage before treating this as compliance evidence."
    });
  } catch (error) {
    if (error.code === "BODY_TOO_LARGE") {
      return sendJson(res, 413, { ok: false, error: "BODY_TOO_LARGE" });
    }
    if (error instanceof SyntaxError) {
      return sendJson(res, 400, { ok: false, error: "INVALID_JSON", message: error.message });
    }
    return sendJson(res, 500, { ok: false, error: "AUDIT_EVENT_FAILED" });
  }
};
