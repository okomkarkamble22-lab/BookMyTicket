# BookMyTicket

Monorepo layout:

```text
BookMyTicket/
├── frontend/
└── backend/
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend

The backend is a small FastAPI app.

```bash
# From the repo root:
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

If you are already inside `frontend/`, use `cd ..\backend` instead.

If you see `unicorn`, it should be `uvicorn`.
