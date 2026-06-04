import { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'

const trendingMovies = [
  {
    id: 1,
    title: 'Quantum Break',
    rating: 9.4,
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80',
    rank: 1,
  },
  {
    id: 2,
    title: 'Shadow Protocol',
    rating: 9.1,
    poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80',
    rank: 2,
  },
  {
    id: 3,
    title: 'The Uprising',
    rating: 8.9,
    poster: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80',
    rank: 3,
  },
  {
    id: 4,
    title: 'Lost Horizons',
    rating: 8.8,
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80',
    rank: 4,
  },
  {
    id: 5,
    title: 'Digital Dreams',
    rating: 8.7,
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80',
    rank: 5,
  },
  {
    id: 6,
    title: 'Crimson Night',
    rating: 8.6,
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
    rank: 6,
  },
  {
    id: 7,
    title: 'Beyond Stars',
    rating: 8.5,
    poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80',
    rank: 7,
  },
  {
    id: 8,
    title: 'City Lights',
    rating: 8.4,
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
    rank: 8,
  },
]

export default function TrendingMovies() {
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
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
                Trending Movies
              </h2>
              <p className="text-muted-foreground text-sm mt-1">Top picks based on audience favorites</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-background hover:bg-primary/20 border border-border hover:border-primary transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-background hover:bg-primary/20 border border-border hover:border-primary transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="group flex-shrink-0 relative cursor-pointer">
              <div className="absolute -left-2 bottom-0 z-10 font-[family-name:var(--font-poppins)] font-bold text-[100px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-foreground/20 to-transparent select-none">
                {movie.rank}
              </div>

              <div className="relative w-[140px] sm:w-[160px] ml-8">
                <div className="aspect-[2/3] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/20">
                  <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center justify-between text-white text-xs mb-2">
                      <span className="truncate font-medium">{movie.title}</span>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{movie.rating}</span>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-primary hover:bg-primary/90 text-white text-xs font-semibold rounded-lg transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
