function HeroSection() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
        Portafolio profesional
      </p>

      <h1 className="mt-4 text-4xl font-bold md:text-6xl">
        Jorge García
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        Profesional junior en tecnología con enfoque en desarrollo web, análisis de sistemas,
        bases de datos y ciberseguridad.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="#projects" className="rounded-xl bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700">
          Ver proyectos
        </a>
        <a href="#contact" className="rounded-xl border border-slate-600 px-5 py-3 font-medium hover:bg-slate-800">
          Contacto
        </a>
      </div>
    </section>
  )
}

export default HeroSection