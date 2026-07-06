import { Check, Smartphone } from 'lucide-react'
import { appFeatures } from '../data/homeContent'

export default function MobileAppSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Smartphone className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Mobile App
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 text-balance leading-tight">
              Book Tickets on the Go with Our Mobile App
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Download the BookMyTicket app and enjoy seamless booking experience. Get exclusive deals, instant confirmations, and never miss a show again.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 leading-none">Download on the</div>
                  <div className="text-sm font-semibold text-black">App Store</div>
                </div>
              </button>

              <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path fill="#EA4335" d="M5.26 2.51L15.1 8.5l-2.87 3.15L5.2 2.54c-.08-.12 0-.11.06-.03z" />
                  <path fill="#FBBC04" d="M3.29 21.4V2.6c0-.4.22-.65.47-.57l9.01 9.12-9.09 9.86c-.27.09-.39-.16-.39-.61z" />
                  <path fill="#4285F4" d="M15.1 15.5l-2.87-3.15 2.87-3.15 5.12 2.96c.58.33.58.88 0 1.22l-5.12 3.12z" />
                  <path fill="#34A853" d="M12.23 12.35L5.2 21.46c-.08.08-.06.09.06-.03l9.84-5.99-2.87-3.09z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 leading-none">GET IT ON</div>
                  <div className="text-sm font-semibold text-black">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <div className="relative w-[280px] h-[560px] bg-foreground rounded-[3rem] p-3 shadow-2xl shadow-foreground/20 border border-border">
                <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-foreground/20 to-transparent z-10 flex items-center justify-center">
                    <div className="w-24 h-6 bg-foreground rounded-full" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-muted to-background">
                    <div className="pt-16 px-4 pb-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                          <span className="text-white text-xs font-bold">B</span>
                        </div>
                        <span className="text-foreground font-semibold text-sm">BookMyTicket</span>
                      </div>
                      <div className="h-8 bg-muted rounded-lg mb-4" />
                    </div>

                    <div className="px-4 space-y-3">
                      <div className="h-32 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl" />
                      <div className="flex gap-2">
                        <div className="flex-1 h-20 bg-muted rounded-lg" />
                        <div className="flex-1 h-20 bg-muted rounded-lg" />
                      </div>
                      <div className="h-24 bg-muted rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-[-2px] top-32 w-1 h-16 bg-border rounded-l-sm" />
              <div className="absolute left-[-2px] top-24 w-1 h-8 bg-border rounded-r-sm" />
              <div className="absolute left-[-2px] top-36 w-1 h-12 bg-border rounded-r-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
