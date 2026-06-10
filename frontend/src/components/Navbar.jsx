import { useState } from 'react'
import { ChevronDown, Menu, Search, MapPin, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/bookings', label: 'My Bookings' },
]

export default function Navbar({ currentPath = '/', onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const handleNavClick = (event, href) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate(href)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="shrink-0" onClick={(event) => handleNavClick(event, '/')}>
            <img
              src="/images/logo.png"
              alt="BookMyTicket"
              width="200"
              height="60"
              className="h-[60px] w-auto object-contain"
              loading="eager"
            />
          </a>

          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`text-[15px] font-semibold transition-colors duration-200 relative py-2 ${
                    currentPath === link.href
                      ? 'text-[#E11D48]'
                      : 'text-[#1F2937] hover:text-[#E11D48]'
                  }`}
                >
                  {link.label}
                  {currentPath === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E11D48] rounded-full" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2.5 rounded-full text-[#1F2937] hover:bg-gray-100 transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              {showSearch && (
                <div className="absolute top-12 right-0 w-80 bg-white rounded-xl p-3 shadow-xl border border-gray-100">
                  <input
                    type="text"
                    placeholder="Search movies, events, shows..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48]/20 focus:border-[#E11D48]"
                    autoFocus
                  />
                </div>
              )}
            </div>

            <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#1F2937] hover:bg-gray-100 transition-colors duration-200">
              <MapPin className="h-4 w-4 text-[#E11D48]" />
              <span className="text-sm font-medium">Pune</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>

            <div className="w-px h-6 bg-gray-200" />

            <button className="px-5 py-2.5 text-sm font-semibold text-[#E11D48] border-2 border-[#E11D48] rounded-lg hover:bg-[#E11D48]/5 transition-colors duration-200">
              Sign In
            </button>

            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-[#E11D48] rounded-lg hover:bg-[#BE123C] transition-all duration-200 hover:shadow-md hover:shadow-[#E11D48]/25">
              Sign Up
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#1F2937] hover:bg-gray-100 transition-colors duration-200"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-6 space-y-5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search movies, events, shows..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48]/20 focus:border-[#E11D48]"
              />
            </div>

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200">
              <MapPin className="h-5 w-5 text-[#E11D48]" />
              <span className="text-sm font-medium text-[#1F2937]">Pune</span>
              <ChevronDown className="h-4 w-4 text-gray-400 ml-auto" />
            </button>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                    currentPath === link.href
                      ? 'text-[#E11D48] bg-[#E11D48]/5'
                      : 'text-[#1F2937] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-5 border-t border-gray-100 space-y-3">
              <button className="w-full px-4 py-3 text-sm font-semibold text-[#E11D48] border-2 border-[#E11D48] rounded-xl hover:bg-[#E11D48]/5 transition-colors duration-200">
                Sign In
              </button>
              <button className="w-full px-4 py-3 text-sm font-semibold text-white bg-[#E11D48] rounded-xl hover:bg-[#BE123C] transition-all duration-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
