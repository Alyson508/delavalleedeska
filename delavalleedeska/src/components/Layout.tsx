import Link from 'next/link'
export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div className="min-h-screen font-sans text-greendeep bg-cream">
      <header className="bg-white/80 p-4 shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl">De la vallée d'Eska</Link>
          <nav className="hidden md:flex gap-4">
            <Link href="/presentation">Présentation</Link>
            <Link href="/reproducteurs">Reproducteurs</Link>
            <Link href="/portees">Portées</Link>
            <Link href="/galerie">Galerie</Link>
            <Link href="/contact" className="px-3 py-1 bg-greenpastel rounded">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>

      <footer className="bg-greendeep text-white p-6 mt-10">
        <div className="max-w-6xl mx-auto text-center">© {new Date().getFullYear()} De la vallée d'Eska — elevage-lve@orange.fr</div>
      </footer>
    </div>
  )
}
