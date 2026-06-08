from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import movies

app = FastAPI()

# Allow frontend dev server to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register movies route
app.include_router(movies.router)
