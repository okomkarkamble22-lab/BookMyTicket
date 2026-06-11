import { useMemo, useState } from 'react'
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Heart,
  Play,
  Search,
  Star,
  Ticket,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  formatGenres,
  formatVotes,
  getComingSoonMovies,
  getFeaturedMovie,
  getGenres,
  getLanguages,
  getNowShowingMovies,
} from '../data/movies'

const featuredMovie = getFeaturedMovie()
const nowShowingMovies = getNowShowingMovies()
const comingSoonMovies = getComingSoonMovies()
const languages = getLanguages()
const genres = getGenres()
const sortOptions = ['Popular', 'Rating', 'Newest', 'A-Z']

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="relative flex min-w-[160px] flex-1 items-center">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-2xl border border-border bg-white px-4 py-3 pr-10 text-sm font-medium text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-muted-foreground" />
    </label>
  )
}

function MovieCard({ movie, onNavigate }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(225,29,72,0.18)]">
      <button
        type="button"
        onClick={() => onNavigate(`/movies/${movie.slug}`)}
        className="contents text-left"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
            <div className="inline-flex items-center gap-1 rounded-full bg-black/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <Star className="h-3.5 w-3.5 fill-[#FACC15] text-[#FACC15]" />
              {movie.rating}
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1F2937]">
              <Heart className="h-3.5 w-3.5 text-primary" />
              {formatVotes(movie.votes)}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
              <div className="flex items-center justify-between gap-2 text-xs text-white/85">
                <span>{movie.language}</span>
                <span>{movie.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex-1 space-y-2">
            <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {movie.title}
            </h3>
            <p className="text-sm text-muted-foreground">{movie.language}</p>
            <p className="text-sm text-muted-foreground">{formatGenres(movie)}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4 text-primary" />
              <span>{movie.duration}</span>
            </div>
          </div>

          <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-[#BE123C] group-hover:shadow-lg group-hover:shadow-primary/25">
            <Ticket className="h-4 w-4" />
            View Details
          </span>
        </div>
      </button>
    </article>
  )
}

export default function Movies({ currentPath, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [selectedGenre, setSelectedGenre] = useState(genres[0])
  const [selectedSort, setSelectedSort] = useState(sortOptions[0])

  const filteredMovies = useMemo(() => {
    let movies = nowShowingMovies.filter((movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatGenres(movie).toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.language.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesLanguage =
        selectedLanguage === 'All Languages' || movie.language === selectedLanguage

      const matchesGenre = selectedGenre === 'All Genres' || movie.genres.includes(selectedGenre)

      return matchesSearch && matchesLanguage && matchesGenre
    })

    if (selectedSort === 'Rating') {
      movies = [...movies].sort((first, second) => second.rating - first.rating)
    } else if (selectedSort === 'Newest') {
      movies = [...movies].sort(
        (first, second) => new Date(second.releaseDate) - new Date(first.releaseDate),
      )
    } else if (selectedSort === 'A-Z') {
      movies = [...movies].sort((first, second) => first.title.localeCompare(second.title))
    }

    return movies
  }, [searchTerm, selectedLanguage, selectedGenre, selectedSort])

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />

      <section className="relative overflow-hidden bg-[#0F0F0F] pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredMovie.backdrop})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/92 to-[#0F0F0F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[150px]" />

        <div className="relative mx-auto flex min-h-[640px] max-w-[1280px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.3fr_420px]">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(225,29,72,0.8)]" />
                Featured Premiere
              </div>

              <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                {featuredMovie.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/90">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <Star className="h-4 w-4 fill-[#FACC15] text-[#FACC15]" />
                  {featuredMovie.rating}/10
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  {formatGenres(featuredMovie)}
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  {featuredMovie.duration}
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  {featuredMovie.language}
                </span>
              </div>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
                {featuredMovie.synopsis}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate(`/movies/${featuredMovie.slug}`)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <Play className="h-4 w-4 fill-white" />
                  Explore Movie
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/bookings')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#BE123C] hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <Ticket className="h-4 w-4" />
                  Book Tickets
                </button>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-md">
                <Heart className="h-4 w-4 text-primary" />
                Loved by {formatVotes(featuredMovie.votes)}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[380px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 bg-white/8 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[26px]">
                  <img
                    src={featuredMovie.poster}
                    alt={`${featuredMovie.title} featured poster`}
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-white">
                      {featuredMovie.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{formatGenres(featuredMovie)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-border/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <label className="relative flex-[1.4]">
              <span className="sr-only">Search movies</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search movies, genres or language"
                className="w-full rounded-2xl border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:flex lg:flex-1">
              <FilterSelect
                label="Filter by language"
                value={selectedLanguage}
                onChange={(event) => setSelectedLanguage(event.target.value)}
                options={languages}
              />
              <FilterSelect
                label="Filter by genre"
                value={selectedGenre}
                onChange={(event) => setSelectedGenre(event.target.value)}
                options={genres}
              />
              <FilterSelect
                label="Sort movies"
                value={selectedSort}
                onChange={(event) => setSelectedSort(event.target.value)}
                options={sortOptions}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-foreground">
              Now Showing
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover crowd favourites, premium formats, and newly released blockbusters.
            </p>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            {filteredMovies.length} movie{filteredMovies.length === 1 ? '' : 's'} available
          </p>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-border bg-card px-6 py-14 text-center">
            <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-foreground">
              No movies match these filters
            </h3>
            <p className="mt-2 text-muted-foreground">
              Try changing the search term, language, or genre to see more results.
            </p>
          </div>
        )}
      </section>

      <section className="border-t border-border bg-muted/50 py-14 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-foreground">
                Coming Soon
              </h2>
              <p className="mt-2 text-muted-foreground">
                Keep an eye on the next wave of premieres landing in theatres.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-primary" />
              Swipe or scroll to explore
            </div>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">
            {comingSoonMovies.map((movie) => (
              <article
                key={movie.id}
                className="group min-w-[260px] max-w-[260px] overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={`${movie.title} coming soon poster`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary/25">
                    {movie.releaseDate}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-foreground">
                    {movie.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{movie.genre}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
