from fastapi import APIRouter

router = APIRouter(prefix="/api/movies", tags=["movies"])

movies = [
    {"id": 1, "title": "Inception", "year": 2010},
    {"id": 2, "title": "Interstellar", "year": 2014},
    {"id": 3, "title": "The Dark Knight", "year": 2008},
]

@router.get("/")
def get_movies():
    return movies
