# sgen-website

Monorepo for the **sgen website**:

- **Frontend** (`frontend/`): the actual working site — a React/Vite SPA with
  Keycloak login (PKCE, no client secret in the browser), marketing pages
  (Home, Privacy, Terms, Licensing), and MDX-based SDK documentation
  (`getting-started`, `core-concepts`, API guides for submit/polling/results).
  It talks to Keycloak directly for auth; it does not yet call any SGen
  backend API itself (no `fetch`/`axios` calls exist in `src/` beyond the
  Keycloak client) — job submission is documented for the Python SDK, not
  wired into the site's own UI.
- **Backend** (`backend/`): **scaffolding only, not yet implemented.** It has
  `pyproject.toml`/`requirements.txt`/pre-commit config and a README
  describing a planned FastAPI service, but no `app/` code exists yet. The
  repo root's `main.py` is a placeholder (`"placeholder"`).

## Repository Structure
```
sgen-website/
├── backend/        # scaffolding for a future FastAPI backend (no app code yet)
├── frontend/       # React frontend (Vite) - the working part of this repo
├── README.md
```

## Prerequisites
- Node.js LTS
- Git
- Python 3.11+ (only needed once `backend/` has actual code)

## Local Development

### Frontend
See `frontend/FRONTEND_README.md`

### Backend
Not implemented yet; see `backend/BACKEND_README.md` for the intended shape.

## Notes
- Frontend build/dev config lives entirely under `frontend/`
- Environment variables are not committed to the repository (`VITE_KEYCLOAK_URL`, `VITE_KEYCLOAK_REALM`, `VITE_KEYCLOAK_CLIENT_ID` are required at build time)

## License
TBD
