# SONOORA Audit

<!-- sonoora-architecture:active -->
> **Arquitetura vigente:** [mapa de repos e responsabilidades](<../../../current_memory/core/ARQUITETURA_REPOS_E_OPERACAO.md>). Destino HOME/PASS/ADMIN/API/PAY/UUID; Financeiro, integrações/orquestração e auditoria são responsabilidades internas da API. CORE e SCOUT são nomes históricos aposentados; AUDIT é auditoria da API, sem componente independente no desenho vigente. UUID permanece separado e comum aos consumidores desde o início. Esses nomes não exigem repos/bancos novos; destino não comprova migração/implementação.


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

## Situação da consolidação

Este checkout preserva o shell existente. Evidência/reconciliação passiva têm destino no repo API e interface operacional no ADMIN. Banco/armazenamento separado não é obrigatório por nome; inventário, migração e prova precedem arquivamento deste repo.
