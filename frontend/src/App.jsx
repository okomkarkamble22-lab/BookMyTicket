import { useCallback } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import Home from './pages/Home'
import MovieDetailsPage from './pages/MovieDetailsPage'
import Movies from './pages/Movies'
import SimplePage from './pages/SimplePage'
import useScrollToTop from './hooks/useScrollToTop'
import { normalizePath } from './utils/navigation'

function ScrollToTop() {
  const location = useLocation()
  useScrollToTop(location.pathname)

  return null
}

function RoutedPage({ component: Component, ...props }) {
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = normalizePath(location.pathname)

  const currentPath = pathname.startsWith('/movies/') ? '/movies' : pathname

  const handleNavigate = useCallback(
    (path) => {
      const nextPath = normalizePath(path)

      if (nextPath === pathname) {
        return
      }

      navigate(nextPath)
    },
    [navigate, pathname],
  )

  return <Component currentPath={currentPath} onNavigate={handleNavigate} {...props} />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RoutedPage component={Home} />} />
        <Route path="/movies" element={<RoutedPage component={Movies} />} />
        <Route path="/movies/:slug" element={<RoutedPage component={MovieDetailsPage} />} />
        <Route
          path="/events"
          element={
            <RoutedPage
              component={SimplePage}
              title="Events"
              description="Browse upcoming concerts, comedy shows, and live experiences."
            />
          }
        />
        <Route
          path="/about"
          element={
            <RoutedPage
              component={SimplePage}
              title="About"
              description="BookMyTicket helps you discover and book movies, events, and shows in Pune."
            />
          }
        />
        <Route
          path="/bookings"
          element={
            <RoutedPage
              component={SimplePage}
              title="My Bookings"
              description="Your saved tickets and booking history will appear here."
            />
          }
        />
        <Route
          path="/404"
          element={
            <RoutedPage
              component={SimplePage}
              title="Page Not Found"
              description="We couldn't find that page, so let's get you back to booking."
            />
          }
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
