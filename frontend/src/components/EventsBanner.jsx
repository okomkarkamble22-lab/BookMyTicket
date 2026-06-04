import { ArrowRight, Sparkles } from 'lucide-react'

export default function EventsBanner() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80)',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
          <div className="absolute inset-0 bg-primary/10" />

          <div className="relative py-16 lg:py-24 px-6 lg:px-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Live Entertainment
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 text-balance leading-tight">
                Experience Unforgettable Live Events
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From world-class concerts to spectacular theatrical performances, discover the most exciting live entertainment experiences in Pune.
              </p>

              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-3xl text-primary">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">Upcoming Events</div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-3xl text-white">
                    20+
                  </div>
                  <div className="text-sm text-gray-400">Top Artists</div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-poppins)] font-bold text-3xl text-white">
                    15
                  </div>
                  <div className="text-sm text-gray-400">Premium Venues</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-[family-name:var(--font-poppins)] font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
                  Explore Events
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20 backdrop-blur-sm">
                  View Concerts
                </button>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
