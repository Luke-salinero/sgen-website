# sgen Backend

**Status: not implemented.** This directory currently only has tooling
config (`pyproject.toml`, `requirements.txt`, `.pre-commit-config.yaml`) —
there is no `app/` package or FastAPI application yet, so the instructions
below describe the intended setup once one exists, not something you can
run today.

Planned: a FastAPI-based backend service for the sgen website.

## Tech Stack
- Python
- FastAPI
- Uvicorn
- SQLite (local/dev)

## Setup

### Create and activate virtual environment
```bash
python -m venv .venv
```

Windows (PowerShell):
```powershell
.\.venv\Scripts\Activate.ps1
```

### Install dependencies
```bash
pip install -r requirements.txt
```

## Running the Server
```bash
uvicorn app.main:app --reload
```

Server will be available at:
- http://127.0.0.1:8000
- API docs: http://127.0.0.1:8000/docs

## Environment Variables
Example:
```env
ENV=dev
DEBUG=1
JWT_ISSUER=example
JWT_AUDIENCE=example
DB_PATH=runtime/auth.db
```

## Testing
```bash
python -m unittest discover -s tests
```
