import { useCallback, useEffect, useMemo, useState } from 'react'
import Home from './pages/Home'
import Movies from './pages/Movies'
import SimplePage from './pages/SimplePage'

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback(
    (path) => {
      const nextPath = normalizePath(path)

      if (nextPath === currentPath) {
        return
      }

      window.history.pushState({}, '', nextPath)
      setCurrentPath(nextPath)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [currentPath],
  )

  const page = useMemo(() => {
    switch (currentPath) {
      case '/':
        return <Home currentPath={currentPath} onNavigate={navigate} />
      case '/movies':
        return <Movies currentPath={currentPath} onNavigate={navigate} />
      case '/events':
        return (
          <SimplePage
            title="Events"
            description="Browse upcoming concerts, comedy shows, and live experiences."
            currentPath={currentPath}
            onNavigate={navigate}
          />
        )
      case '/about':
        return (
          <SimplePage
            title="About"
            description="BookMyTicket helps you discover and book movies, events, and shows in Pune."
            currentPath={currentPath}
            onNavigate={navigate}
          />
        )
      case '/bookings':
        return (
          <SimplePage
            title="My Bookings"
            description="Your saved tickets and booking history will appear here."
            currentPath={currentPath}
            onNavigate={navigate}
          />
        )
      default:
        return (
          <SimplePage
            title="Page Not Found"
            description="We couldn't find that page, so let's get you back to booking."
            currentPath={currentPath}
            onNavigate={navigate}
          />
        )
    }
  }, [currentPath, navigate])

  return page
}
