import { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const nowShowingMovies = [
  {
    id: 1,
    title: 'The Dark Knight Returns',
    genre: 'Action • Thriller',
    rating: 9.2,
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
  },
  {
    id: 2,
    title: 'Echoes of Tomorrow',
    genre: 'Sci-Fi • Drama',
    rating: 8.8,
    poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80',
  },
  {
    id: 3,
    title: 'The Midnight Hour',
    genre: 'Horror • Mystery',
    rating: 8.4,
    poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80',
  },
  {
    id: 4,
    title: 'Love in Paris',
    genre: 'Romance • Comedy',
    rating: 8.1,
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
  },
  {
    id: 5,
    title: 'Warriors of Light',
    genre: 'Fantasy • Adventure',
    rating: 8.6,
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80',
  },
  {
    id: 6,
    title: 'The Final Chapter',
    genre: 'Drama • Thriller',
    rating: 9.0,
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80',
  },
]

export default function MovieSlider() {
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
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2">
              Now Showing
            </h2>
            <p className="text-muted-foreground">Currently playing in theatres near you</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/20 border border-border hover:border-primary transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-muted hover:bg-primary/20 border border-border hover:border-primary transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {nowShowingMovies.map((movie) => (
            <div key={movie.id} className="group flex-shrink-0 w-[220px] sm:w-[260px] cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-[family-name:var(--font-poppins)] font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/30">
                    Book Now
                  </button>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-white">{movie.rating}</span>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-foreground text-base mb-1 truncate group-hover:text-primary transition-colors">
                {movie.title}
              </h3>
              <p className="text-sm text-muted-foreground">{movie.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
