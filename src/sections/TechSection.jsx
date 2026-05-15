const techGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'API REST', 'Blade'],
  },
  {
    title: 'Bases de datos',
    items: ['MySQL', 'SQL', 'PDO', 'Eloquent ORM'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'XAMPP', 'Composer', 'npm'],
  },
  {
    title: 'Sistemas y seguridad',
    items: ['Windows', 'Linux', 'Control de accesos', 'Buenas prácticas de seguridad'],
  },
]

function TechSection() {
  return (
    <section id="tech" className="fade-up mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold">Tecnologías y herramientas</h2>
      <p className="mt-4 text-slate-300">
        Tecnologías utilizadas en proyectos académicos y personales.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {techGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <h3 className="text-xl font-semibold text-blue-400">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechSection