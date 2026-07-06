import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { formatGenres, getSliderMovies } from '../utils/movies'

const nowShowingMovies = getSliderMovies()

export default function MovieSlider({ onNavigate }) {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="mb-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Now Showing
            </h2>
            <p className="text-muted-foreground">Currently playing in theatres near you</p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scroll('left')}
              className="rounded-full border border-border bg-muted p-2.5 transition-all hover:border-primary hover:bg-primary/20"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="rounded-full border border-border bg-muted p-2.5 transition-all hover:border-primary hover:bg-primary/20"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-4 scrollbar-hide sm:mx-0 sm:px-0"
        >
          {nowShowingMovies.map((movie) => (
            <button
              key={movie.id}
              type="button"
              onClick={() => onNavigate?.(`/movies/${movie.slug}`)}
              className="group w-[220px] flex-shrink-0 cursor-pointer text-left sm:w-[260px]"
            >
              <div className="relative mb-4 aspect-[2/3] overflow-hidden rounded-2xl">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="w-full rounded-xl bg-primary py-3 text-center font-[family-name:var(--font-poppins)] font-semibold text-white transition-all group-hover:shadow-lg group-hover:shadow-primary/30">
                    View Details
                  </span>
                </div>

                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-white">{movie.rating}</span>
                </div>
              </div>

              <h3 className="mb-1 truncate font-[family-name:var(--font-poppins)] text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                {movie.title}
              </h3>
              <p className="text-sm text-muted-foreground">{formatGenres(movie)}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
