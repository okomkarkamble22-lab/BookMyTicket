import { comingSoonMovies } from '../data/homeContent'
import { movies } from '../data/movies'

const movieMap = new Map(movies.map((movie) => [movie.slug, movie]))

export function formatVotes(votes) {
  if (votes >= 1000) {
    return `${(votes / 1000).toFixed(1)}K votes`
  }

  return `${votes} votes`
}

export function formatGenres(movie) {
  return movie.genres.join(' / ')
}

export function getMovieBySlug(slug) {
  return movieMap.get(slug) ?? null
}

export function getFeaturedMovie() {
  return movies[0]
}

export function getNowShowingMovies() {
  return movies.filter((movie) => movie.status === 'Now Showing')
}

export function getComingSoonMovies() {
  return comingSoonMovies
}

export function getLanguages() {
  return ['All Languages', ...new Set(movies.map((movie) => movie.language))]
}

export function getGenres() {
  return ['All Genres', ...new Set(movies.flatMap((movie) => movie.genres))]
}

export function getSliderMovies() {
  return movies.slice(0, 6)
}

export function getTrendingMovies() {
  return [...movies]
    .sort((first, second) => second.rating - first.rating)
    .slice(0, 8)
    .map((movie, index) => ({ ...movie, rank: index + 1 }))
}

export function getSimilarMovies(movie, limit = 4) {
  return movies
    .filter((candidate) => candidate.slug !== movie.slug)
    .sort((first, second) => {
      const firstSharedGenres = first.genres.filter((genre) => movie.genres.includes(genre)).length
      const secondSharedGenres = second.genres.filter((genre) => movie.genres.includes(genre)).length

      if (secondSharedGenres !== firstSharedGenres) {
        return secondSharedGenres - firstSharedGenres
      }

      return second.rating - first.rating
    })
    .slice(0, limit)
}
