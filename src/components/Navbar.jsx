function Navbar() {
  const links = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Áreas', href: '#areas' },
    { label: 'Tecnologías', href: '#tech' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-bold text-white">
          Jorge García
        </a>

        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar