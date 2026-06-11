import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import MovieSlider from '../components/MovieSlider'
import TrendingMovies from '../components/TrendingMovies'
import MovieCategories from '../components/MovieCategories'
import GenreSearch from '../components/GenreSearch'
import ComingSoon from '../components/ComingSoon'
import EventsBanner from '../components/EventsBanner'
import EventsSection from '../components/EventsSection'
import TheatreShows from '../components/TheatreShows'
import RewardsSection from '../components/RewardsSection'
import MobileAppSection from '../components/MobileAppSection'
import Footer from '../components/Footer'

export default function Home({ currentPath, onNavigate }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />
      <HeroSection />
      <MovieSlider onNavigate={onNavigate} />
      <TrendingMovies onNavigate={onNavigate} />
      <MovieCategories />
      <GenreSearch />
      <ComingSoon />
      <EventsBanner />
      <EventsSection />
      <TheatreShows />
      <RewardsSection />
      <MobileAppSection />
      <Footer />
    </main>
  )
}
