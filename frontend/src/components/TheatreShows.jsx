import { Calendar, MapPin, Theater } from 'lucide-react'
import { theatreShows } from '../data/homeContent'

export default function TheatreShows() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <Theater className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
                Theatre Shows
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Experience the magic of live performances
              </p>
            </div>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-background hover:bg-primary text-foreground hover:text-white text-sm font-semibold rounded-lg transition-all border border-border hover:border-primary">
            View All Shows
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {theatreShows.map((show) => (
            <div
              key={show.id}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={show.poster}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white">{show.type}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg text-white mb-2 group-hover:text-primary transition-colors">
                  {show.title}
                </h3>

                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{show.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>{show.dates}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-primary/20 hover:bg-primary text-white font-semibold rounded-xl transition-all duration-300 border border-primary/30 hover:border-primary backdrop-blur-sm">
                  Book Tickets
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-background hover:bg-primary text-foreground hover:text-white text-sm font-semibold rounded-lg transition-all border border-border hover:border-primary">
            View All Shows
          </button>
        </div>
      </div>
    </section>
  )
}
