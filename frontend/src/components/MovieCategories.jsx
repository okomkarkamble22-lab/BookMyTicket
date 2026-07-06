import { useState } from 'react'
import { categories } from '../data/homeContent'

export default function MovieCategories() {
  const [activeCategory, setActiveCategory] = useState('action')

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Find your perfect movie by exploring our curated genres
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full font-[family-name:var(--font-poppins)] font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-muted text-foreground/70 hover:bg-secondary hover:text-foreground border border-border hover:border-primary/50'
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {activeCategory === category.id && <span className="ml-2 text-xs opacity-80">({category.count})</span>}
              {activeCategory !== category.id && (
                <span className="absolute inset-0 rounded-full bg-primary scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
