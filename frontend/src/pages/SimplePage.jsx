import Navbar from '../components/Navbar'

export default function SimplePage({ title, description, currentPath, onNavigate }) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-[#1F2937]">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </section>
    </main>
  )
}
