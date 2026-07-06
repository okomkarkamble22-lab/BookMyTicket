import { Gift, Star, Users, Zap } from 'lucide-react'
import { rewardFeatures } from '../data/homeContent'

const rewardIcons = {
  Gift,
  Star,
  Users,
  Zap,
}

export default function RewardsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Gift className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Rewards Program
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 text-balance">
            Unlock Exclusive Rewards & Benefits
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our loyalty program and enjoy amazing perks every time you book with BookMyTicket
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewardFeatures.map((feature, index) => {
            const Icon = rewardIcons[feature.iconName]

            return (
              <div
                key={index}
                className="group relative bg-muted rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} to-transparent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-[family-name:var(--font-poppins)] font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
            Join Rewards Program
            <span className="inline-block transition-transform group-hover:translate-x-1">â†’</span>
          </button>
        </div>
      </div>
    </section>
  )
}
