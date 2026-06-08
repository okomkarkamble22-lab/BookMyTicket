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
```bash
cd backend
python -m venv bookmyshow
bookmyshow\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The `backend/` directory is reserved for the future FastAPI application.
