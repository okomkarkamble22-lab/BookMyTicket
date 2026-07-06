import { memo } from 'react'
import { Clock3, Heart, Star, Ticket } from 'lucide-react'
import { formatGenres, formatVotes } from '../utils/movies'

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

export default memo(MovieCard)
