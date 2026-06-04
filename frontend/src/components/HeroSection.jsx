import { useCallback, useEffect, useState } from 'react'
import { Play, Users, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const stats = [
  { value: '10M+', label: 'Happy Customers', icon: Users },
  { value: '5000+', label: 'Events Annually', icon: Calendar },
  { value: '500+', label: 'Venues Partner', icon: Award },
]

const featuredContent = [
  {
    id: 1,
    type: 'Concert',
    title: 'Coldplay World Tour',
    subtitle: 'Live in Pune',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=80',
    description:
      'Experience the magic of Coldplay live as they bring their spectacular world tour to Pune. An unforgettable night of music, lights, and pure euphoria awaits.',
  },
  {
    id: 2,
    type: 'Movie Premiere',
    title: 'Dune: Part Three',
    subtitle: 'IMAX Experience',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80',
    description:
      "The epic conclusion to the Dune saga. Witness Paul Atreides' final destiny on the grandest IMAX screens across the city.",
  },
  {
    id: 3,
    type: 'Stand-up Comedy',
    title: 'Comedy Night Live',
    subtitle: 'Featuring Top Comics',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1920&q=80',
    description:
      "India's top comedians come together for one explosive night of laughter. Get ready for an evening that will leave your sides splitting.",
  },
  {
    id: 4,
    type: 'Theatre',
    title: 'The Phantom Returns',
    subtitle: 'Broadway Musical',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1920&q=80',
    description:
      'The legendary Broadway musical returns to captivate audiences with its timeless story of love, mystery, and music.',
  },
]

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden bg-[#0F0F0F]">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {featuredContent.map((item, index) => (
            <div key={item.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out"
                style={{
                  backgroundImage: `url(${item.image})`,
                  transform: selectedIndex === index ? 'scale(1.1)' : 'scale(1)',
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/60" />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl pt-24 lg:pt-28">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/20 border border-primary/40 mb-8 backdrop-blur-sm">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                    </span>
                    <span className="text-sm font-semibold text-white uppercase tracking-widest">
                      Live Entertainment
                    </span>
                  </div>

                  <h1 className="font-[family-name:var(--font-poppins)] font-black text-5xl sm:text-6xl lg:text-8xl text-white mb-3 leading-[0.95] tracking-tight">
                    {item.title}
                  </h1>

                  <p className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold mb-6">
                    {item.subtitle}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/10 border border-white/20 mb-6">
                    <span className="text-sm font-medium text-gray-300">{item.type}</span>
                  </div>

                  <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-5">
                    <button className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-primary to-[#BE123C] text-white font-[family-name:var(--font-poppins)] font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 hover:-translate-y-1">
                      Book Tickets Now
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </button>

                    <button className="group flex items-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg rounded-2xl transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-md hover:scale-105">
                      <Play className="h-6 w-6 fill-white transition-transform duration-300 group-hover:scale-110" />
                      Watch Trailer
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center gap-10 mt-16 pt-10 border-t border-white/10">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                          <stat.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-[family-name:var(--font-poppins)] font-bold text-2xl text-white">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/60 hover:bg-primary text-white transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-primary hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/60 hover:bg-primary text-white transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-primary hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`transition-all duration-500 ${
              selectedIndex === index
                ? 'w-12 h-3 bg-gradient-to-r from-primary to-[#BE123C] rounded-full shadow-lg shadow-primary/50'
                : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none translate-x-1/2 translate-y-1/2" />
    </section>
  )
}
