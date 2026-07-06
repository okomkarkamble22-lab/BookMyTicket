import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react'
import { getTrendingMovies } from '../utils/movies'

const trendingMovies = getTrendingMovies()

export default function TrendingMovies({ onNavigate }) {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/20 p-2">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Trending Movies
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Top picks based on audience favorites
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scroll('left')}
              className="rounded-full border border-border bg-background p-2.5 transition-all hover:border-primary hover:bg-primary/20"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="rounded-full border border-border bg-background p-2.5 transition-all hover:border-primary hover:bg-primary/20"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:mx-0 sm:px-0"
        >
          {trendingMovies.map((movie) => (
            <button
              key={movie.id}
              type="button"
              onClick={() => onNavigate?.(`/movies/${movie.slug}`)}
              className="group relative flex-shrink-0 cursor-pointer text-left"
            >
              <div className="absolute bottom-0 -left-2 z-10 select-none bg-gradient-to-b from-foreground/20 to-transparent bg-clip-text font-[family-name:var(--font-poppins)] text-[100px] font-bold leading-none text-transparent">
                {movie.rank}
              </div>

              <div className="relative ml-8 w-[140px] sm:w-[160px]">
                <div className="aspect-[2/3] overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/20">
                  <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-2 flex items-center justify-between text-xs text-white">
                      <span className="truncate font-medium">{movie.title}</span>
                      <div className="flex shrink-0 items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{movie.rating}</span>
                      </div>
                    </div>
                    <span className="block w-full rounded-lg bg-primary py-2 text-center text-xs font-semibold text-white transition-all">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
