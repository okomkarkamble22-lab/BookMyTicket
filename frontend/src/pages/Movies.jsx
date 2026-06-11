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

const featuredMovie = {
  title: 'Dune: Part Three',
  rating: 9.1,
  genre: 'Sci-Fi • Adventure',
  duration: '2h 46m',
  language: 'English',
  votes: '48.2K votes',
  image:
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80',
  description:
    "Witness Paul Atreides' final chapter on the grandest screens in Pune with breathtaking visuals, premium sound, and a story built for the big screen.",
}

const nowShowingMovies = [
  {
    id: 1,
    title: 'Dune: Part Three',
    rating: 9.1,
    votes: '48.2K votes',
    language: 'English',
    genre: 'Sci-Fi • Adventure',
    duration: '2h 46m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Echoes of Tomorrow',
    rating: 8.8,
    votes: '31.5K votes',
    language: 'English',
    genre: 'Sci-Fi • Drama',
    duration: '2h 12m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Midnight Protocol',
    rating: 8.6,
    votes: '22.8K votes',
    language: 'Hindi',
    genre: 'Action • Thriller',
    duration: '2h 18m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Love Beyond Rain',
    rating: 8.2,
    votes: '14.9K votes',
    language: 'Hindi',
    genre: 'Romance • Drama',
    duration: '2h 04m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Shadows of Mumbai',
    rating: 8.9,
    votes: '41.3K votes',
    language: 'Hindi',
    genre: 'Crime • Thriller',
    duration: '2h 28m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Galactic Hearts',
    rating: 8.1,
    votes: '11.2K votes',
    language: 'English',
    genre: 'Romance • Sci-Fi',
    duration: '1h 58m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    title: 'The Last Kingdom',
    rating: 8.7,
    votes: '27.6K votes',
    language: 'Tamil',
    genre: 'Action • Epic',
    duration: '2h 34m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    title: 'Silent Waves',
    rating: 7.9,
    votes: '9.8K votes',
    language: 'Telugu',
    genre: 'Drama • Mystery',
    duration: '2h 01m',
    releaseDate: 'Now Showing',
    poster:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80',
  },
]

const comingSoonMovies = [
  {
    id: 101,
    title: 'Crimson Orbit',
    genre: 'Sci-Fi • Thriller',
    releaseDate: '21 Jun',
    poster:
      'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 102,
    title: 'Monsoon Melody',
    genre: 'Musical • Romance',
    releaseDate: '28 Jun',
    poster:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 103,
    title: 'The Hidden Crown',
    genre: 'Fantasy • Adventure',
    releaseDate: '05 Jul',
    poster:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 104,
    title: 'Neon Run',
    genre: 'Action • Crime',
    releaseDate: '12 Jul',
    poster:
      'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 105,
    title: 'Paper Skies',
    genre: 'Drama • Family',
    releaseDate: '19 Jul',
    poster:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80',
  },
]

const languages = ['All Languages', 'English', 'Hindi', 'Tamil', 'Telugu']
const genres = ['All Genres', 'Action', 'Adventure', 'Crime', 'Drama', 'Epic', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller']
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

function MovieCard({ movie }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(225,29,72,0.18)]">
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
            {movie.votes}
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
          <p className="text-sm text-muted-foreground">{movie.genre}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4 text-primary" />
            <span>{movie.duration}</span>
          </div>
        </div>

        <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#BE123C] hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/30">
          <Ticket className="h-4 w-4" />
          Book Tickets
        </button>
      </div>
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
        movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.language.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesLanguage =
        selectedLanguage === 'All Languages' || movie.language === selectedLanguage

      const matchesGenre =
        selectedGenre === 'All Genres' || movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())

      return matchesSearch && matchesLanguage && matchesGenre
    })

    if (selectedSort === 'Rating') {
      movies = [...movies].sort((first, second) => second.rating - first.rating)
    } else if (selectedSort === 'Newest') {
      movies = [...movies].reverse()
    } else if (selectedSort === 'A-Z') {
      movies = [...movies].sort((first, second) => first.title.localeCompare(second.title))
    }

    return movies
  }, [searchTerm, selectedLanguage, selectedGenre, selectedSort])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />

      <section className="relative overflow-hidden bg-[#0F0F0F] pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredMovie.image})` }}
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
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">{featuredMovie.genre}</span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">{featuredMovie.duration}</span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">{featuredMovie.language}</span>
              </div>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
                {featuredMovie.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30">
                  <Play className="h-4 w-4 fill-white" />
                  Watch Trailer
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#BE123C] hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <Ticket className="h-4 w-4" />
                  Book Tickets
                </button>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-md">
                <Heart className="h-4 w-4 text-primary" />
                Loved by {featuredMovie.votes}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[380px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 bg-white/8 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[26px]">
                  <img
                    src={featuredMovie.image}
                    alt={`${featuredMovie.title} featured poster`}
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-white">
                      {featuredMovie.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{featuredMovie.genre}</p>
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
              <MovieCard key={movie.id} movie={movie} />
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
