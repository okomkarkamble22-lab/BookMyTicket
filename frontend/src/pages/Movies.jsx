import Navbar from '../components/Navbar'

const movies = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Interstellar', year: 2014 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
]

export default function Movies({ currentPath, onNavigate }) {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />
      <section className="px-4 pt-24">
        <h1 className="text-3xl font-semibold mb-4">Movies</h1>
        <div className="space-y-2 text-2xl">
          {movies.map((movie) => (
            <p key={movie.id}>
              {movie.title} ({movie.year})
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}
