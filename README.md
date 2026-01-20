# sgen-website

Monorepo for the **sgen website**, consisting of:

- **Backend**: FastAPI service (Python) providing authentication, entitlements, and API endpoints
- **Frontend**: React application (Vite) that consumes the backend API

## Repository Structure
```
sgen-website/
├── backend/        # FastAPI backend (Python)
├── frontend/       # React frontend (Vite)
├── README.md
```

## Prerequisites
- Python 3.11+
- Node.js LTS
- Git

## Local Development

### Backend
See `backend/README.md`

### Frontend
See `frontend/README.md`

## High-level Architecture
```
Browser (React)
   |
   | HTTP (JSON, JWT)
   v
FastAPI Backend
   |
   v
Database / Services
```

## Notes
- Backend and frontend dependencies are managed independently
- Environment variables are not committed to the repository

## License
TBD
