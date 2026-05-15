function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Portafolio profesional
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Jorge García
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Profesional junior en tecnología con enfoque en desarrollo web,
          análisis de sistemas, bases de datos y ciberseguridad.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            'React',
            'Laravel',
            'PHP',
            'MySQL',
            'Tailwind CSS',
            'Git',
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 hover:scale-[1.02]"
          >
            Ver proyectos
          </a>

          <a
            href="https://github.com/jorge2360"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:bg-slate-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jorge-garcía-0628b8222"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:bg-slate-800"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">3+</h3>
            <p className="mt-2 text-slate-400">
              Proyectos completos desarrollados
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">Frontend + Backend</h3>
            <p className="mt-2 text-slate-400">
              Experiencia en aplicaciones full stack
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold text-blue-400">Junior Tech Profile</h3>
            <p className="mt-2 text-slate-400">
              Desarrollo, bases de datos y tecnología
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection