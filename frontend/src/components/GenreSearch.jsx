import { Film } from 'lucide-react'
import { genreCards } from '../data/homeContent'

export default function GenreSearch() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-primary/20">
            <Film className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
              Search by Genre
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Explore movies from your favorite genres</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {genreCards.map((genre) => (
            <div
              key={genre.id}
              className="group relative aspect-[16/9] md:aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={genre.image}
                alt={genre.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t ${genre.color} to-black/60 transition-opacity duration-300 group-hover:opacity-90`}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl sm:text-2xl text-white mb-1 transition-transform duration-300 group-hover:-translate-y-2">
                  {genre.name}
                </h3>
                <p className="text-white/80 text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  {genre.count} movies available
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-white/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
