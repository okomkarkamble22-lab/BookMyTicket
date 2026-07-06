import { Bell, Calendar, Clock } from 'lucide-react'
import { comingSoonMovies } from '../data/homeContent'

export default function ComingSoon() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-primary/20">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
              Coming Soon
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Upcoming releases you won&apos;t want to miss
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingSoonMovies.map((movie, index) => (
            <div key={movie.id} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[2/3]">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                    <Clock className="h-3.5 w-3.5 text-white" />
                    <span className="text-xs font-semibold text-white">{movie.daysLeft} days</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{movie.releaseDate}</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-muted hover:bg-primary text-foreground hover:text-white font-semibold rounded-xl transition-all duration-300 border border-border hover:border-primary">
                    <Bell className="h-4 w-4" />
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
