import { CalendarDays, MapPin, Ticket } from 'lucide-react'
import { trendingEvents } from '../data/homeContent'

export default function EventsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <Ticket className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
                Trending Events
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Hot events everyone&apos;s talking about
              </p>
            </div>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-muted hover:bg-secondary text-foreground text-sm font-semibold rounded-lg transition-all border border-border hover:border-primary">
            View All Events
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white">{event.category}</span>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                  <span className="text-sm font-bold text-white">{event.price}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-muted hover:bg-primary text-foreground hover:text-white font-semibold rounded-xl transition-all duration-300 border border-border hover:border-primary">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-secondary text-foreground text-sm font-semibold rounded-lg transition-all border border-border hover:border-primary">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}
