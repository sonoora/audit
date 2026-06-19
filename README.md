# SONOORA Audit

Operational audit shell for SONOORA.

Audit is not Scout.

- Scout learns vendor contracts before implementation.
- Audit records real SONOORA operations by `spay_id` after implementation.

## v0 scope

- `GET /health`
- `GET /ready`
- `POST /events`
- simple internal page to preview normalized audit payloads

This first deployment does not persist compliance evidence yet. It creates the repo, Vercel deployment, and route shape.

## Future scope

- dedicated audit database;
- immutable event stream;
- normalized actions by `spay_id`;
- admin/operator attribution;
- provider request/response references;
- webhook references;
- compliance retention policy.
