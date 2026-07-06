import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  CalendarDays,
  Clock3,
  Languages,
  Play,
  ShieldCheck,
  Star,
  Ticket,
  UserRound,
  Video,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import TrailerModal from '../components/TrailerModal'
import {
  formatGenres,
  formatVotes,
  getMovieBySlug,
  getSimilarMovies,
} from '../utils/movies'

function DetailChip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
      {children}
    </span>
  )
}

function QuickInfoCard({ icon: Icon, label, value }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_16px_35px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-[#E50914]/10 p-3 text-[#E50914]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-1 text-base font-semibold text-[#1A1A1A]">{value}</p>
        </div>
      </div>
    </article>
  )
}

function CastCard({ member }) {
  return (
    <article className="min-w-[180px] rounded-2xl bg-white p-4 shadow-[0_16px_35px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
      <img
        src={member.image}
        alt={member.name}
        className="h-44 w-full rounded-2xl object-cover"
        loading="lazy"
      />
      <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">{member.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{member.character}</p>
    </article>
  )
}

function CrewCard({ label, value }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_16px_35px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">{value}</p>
    </article>
  )
}

function RatingBar({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-sm font-semibold text-[#1A1A1A]">{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-[#F1F1F1]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#E50914] to-[#ff5a63] transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

function SimilarMovieCard({ movie, onNavigate }) {
  return (
    <article className="group overflow-hidden rounded-[24px] bg-white shadow-[0_16px_35px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
      <button
        type="button"
        onClick={() => onNavigate(`/movies/${movie.slug}`)}
        className="block w-full text-left"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white">
            <Star className="h-3.5 w-3.5 fill-[#FFD54F] text-[#FFD54F]" />
            {movie.rating}
          </div>
        </div>
        <div className="space-y-2 p-4">
          <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#E50914]">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-500">{formatGenres(movie)}</p>
          <p className="text-sm text-gray-500">{movie.language}</p>
        </div>
      </button>
    </article>
  )
}

function LoadingState() {
  return (
    <div className="space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="animate-pulse overflow-hidden rounded-[32px] bg-[#111111] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="aspect-[3/4] rounded-[28px] bg-white/10" />
            <div className="space-y-4">
              <div className="h-5 w-40 rounded-full bg-white/10" />
              <div className="h-12 w-3/4 rounded-2xl bg-white/10" />
              <div className="h-6 w-1/2 rounded-2xl bg-white/10" />
              <div className="h-28 w-full rounded-[24px] bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NotFoundState({ currentPath, onNavigate }) {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="w-full rounded-[32px] bg-white p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)] ring-1 ring-black/5 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E50914]/10 text-[#E50914]">
            <Video className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#1A1A1A]">
            Movie not found
          </h1>
          <p className="mt-3 text-gray-600">
            We could not find the movie you were looking for. Try exploring the current movies list.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/movies')}
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#be0e18]"
          >
            Browse Movies
          </button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function MovieDetailsPage({ currentPath, onNavigate }) {
  const { slug } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    let isActive = true
    setIsLoading(true)
    setIsExpanded(false)
    setShowTrailer(false)

    const timer = window.setTimeout(() => {
      if (!isActive) {
        return
      }

      setMovie(getMovieBySlug(slug))
      setIsLoading(false)
    }, 120)

    return () => {
      isActive = false
      window.clearTimeout(timer)
    }
  }, [slug])

  const similarMovies = useMemo(() => {
    if (!movie) {
      return []
    }

    return getSimilarMovies(movie)
  }, [movie])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#F8F8F8]">
        <Navbar currentPath={currentPath} onNavigate={onNavigate} />
        <div className="pt-24">
          <LoadingState />
        </div>
        <Footer />
      </main>
    )
  }

  if (!movie) {
    return <NotFoundState currentPath={currentPath} onNavigate={onNavigate} />
  }

  const synopsisPreview =
    movie.synopsis.length > 220 ? `${movie.synopsis.slice(0, 220).trim()}...` : movie.synopsis

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#1A1A1A]">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />

      <section className="relative overflow-hidden bg-[#111111] pt-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/88 to-[#090909]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-transparent" />
        <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-[#E50914]/25 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E50914]/20 blur-[150px]" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
            <div className="mx-auto w-full max-w-[360px]">
              <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  className="aspect-[3/4] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full border border-[#E50914]/50 bg-[#E50914]/20 px-4 py-2 text-sm font-semibold text-white">
                {movie.status}
              </span>
              <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-poppins)] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {movie.title}
              </h1>
              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#E50914] to-[#ff5a63]" />
              {movie.tagline ? (
                <p className="mt-4 text-lg text-white/80 sm:text-xl">{movie.tagline}</p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <DetailChip>
                  <Star className="mr-2 h-4 w-4 fill-[#FFD54F] text-[#FFD54F]" />
                  {movie.rating}/10
                </DetailChip>
                <DetailChip>{formatGenres(movie)}</DetailChip>
                <DetailChip>{movie.duration}</DetailChip>
                <DetailChip>{movie.language}</DetailChip>
                <DetailChip>{movie.releaseDate}</DetailChip>
                <DetailChip>{movie.certification}</DetailChip>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">
                {movie.synopsis}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/bookings')}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#be0e18] hover:shadow-[0_18px_30px_rgba(229,9,20,0.28)]"
                >
                  <Ticket className="mr-2 h-4 w-4" />
                  Book Tickets
                </button>
                <button
                  type="button"
                  onClick={() => setShowTrailer(true)}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  <Play className="mr-2 h-4 w-4 fill-white" />
                  Play Trailer
                </button>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-md">
                <UserRound className="h-4 w-4 text-[#ff6b72]" />
                Loved by {formatVotes(movie.votes)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          <QuickInfoCard icon={Star} label="Ratings" value={`${movie.rating}/10`} />
          <QuickInfoCard icon={Video} label="Genre" value={formatGenres(movie)} />
          <QuickInfoCard icon={Clock3} label="Running Time" value={movie.duration} />
          <QuickInfoCard icon={Languages} label="Language" value={movie.language} />
          <QuickInfoCard icon={CalendarDays} label="Release Date" value={movie.releaseDate} />
          <QuickInfoCard icon={ShieldCheck} label="Certification" value={movie.certification} />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeading title="About the Movie" />
        <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 sm:p-8">
          <p className="text-base leading-8 text-gray-700">
            {isExpanded ? movie.synopsis : synopsisPreview}
          </p>
          {movie.synopsis.length > 220 ? (
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="mt-5 text-sm font-semibold text-[#E50914] transition hover:text-[#be0e18]"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          title="Cast & Crew"
          subtitle="Meet the talent in front of and behind the camera."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.95fr)]">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#1A1A1A]">Cast</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-2 xl:grid-cols-4">
              {movie.cast.map((member) => (
                <CastCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#1A1A1A]">Crew</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <CrewCard label="Director" value={movie.crew.director} />
              <CrewCard label="Producer" value={movie.crew.producer} />
              <CrewCard label="Writer" value={movie.crew.writer} />
              <CrewCard label="Music Director" value={movie.crew.musicDirector} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeading title="Trailer" subtitle="Watch the latest trailer before you book." />
        <button
          type="button"
          onClick={() => setShowTrailer(true)}
          className="group relative block w-full overflow-hidden rounded-[32px] bg-black text-left shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
        >
          <img
            src={movie.trailer.thumbnail}
            alt={`${movie.title} trailer thumbnail`}
            className="aspect-[21/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E50914] text-white shadow-[0_18px_40px_rgba(229,9,20,0.38)] transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-8 w-8 fill-white" />
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/75">Official trailer</p>
            <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold sm:text-3xl">
              {movie.title}
            </h3>
          </div>
        </button>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ratings"
          subtitle="A quick look at audience love and category-by-category performance."
        />
        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                  Overall Rating
                </p>
                <p className="mt-3 font-[family-name:var(--font-poppins)] text-5xl font-black text-[#1A1A1A]">
                  {movie.rating}
                  <span className="text-xl font-semibold text-gray-500">/10</span>
                </p>
              </div>
              <div className="rounded-2xl bg-[#E50914]/10 p-3 text-[#E50914]">
                <Star className="h-6 w-6 fill-[#E50914]" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-[#F59E0B]">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index < Math.round(movie.userRating)

                return (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${filled ? 'fill-current' : 'text-gray-300'}`}
                  />
                )
              })}
            </div>
            <p className="mt-3 text-sm text-gray-600">
              User Rating: <span className="font-semibold text-[#1A1A1A]">{movie.userRating}/5</span>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Audience Votes: <span className="font-semibold text-[#1A1A1A]">{formatVotes(movie.votes)}</span>
            </p>
          </article>

          <article className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 sm:p-8">
            <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#1A1A1A]">
              Rating Breakdown
            </h3>
            <div className="mt-6 space-y-5">
              {movie.ratingsBreakdown.map((item) => (
                <RatingBar key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#a6050d] via-[#E50914] to-[#ff4f57] p-8 text-white shadow-[0_24px_55px_rgba(229,9,20,0.24)] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Book Tickets
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-bold sm:text-4xl">
                Watch {movie.title} on the big screen
              </h2>
              <p className="mt-3 text-white/85">{movie.bookingMessage}</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/bookings')}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-[#E50914] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(255,255,255,0.28)]"
            >
              <Ticket className="mr-2 h-4 w-4" />
              Book Tickets Now
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          title="Similar Movies"
          subtitle="More movies you may want to explore next."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {similarMovies.map((similarMovie) => (
            <SimilarMovieCard
              key={similarMovie.slug}
              movie={similarMovie}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      <Footer />

      {showTrailer ? <TrailerModal movie={movie} onClose={() => setShowTrailer(false)} /> : null}
    </main>
  )
}
