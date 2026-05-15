const projects = [
  {
    title: 'API REST Inventario',
    category: 'Full Stack / Backend',
    description:
      'Sistema de inventario con API REST en PHP y MySQL, frontend en React, CRUD de categorías y productos, búsqueda y control de stock.',
    technologies: ['PHP', 'MySQL', 'React', 'Tailwind CSS', 'API REST'],
    demoUrl: '',
    repoUrl: 'https://github.com/jorge2360/api-rest-php-inventario',
  },
  {
    title: 'React Analytics Dashboard',
    category: 'Frontend / Dashboard',
    description:
      'Dashboard administrativo con métricas, gráficos interactivos, filtros, modo oscuro, animaciones y diseño responsive.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    demoUrl: 'https://react-analytics-dashboard-neon.vercel.app/',
    repoUrl: 'https://github.com/jorge2360/react-analytics-dashboard',
  },
  {
    title: 'Laravel Task Manager',
    category: 'Backend / Laravel',
    description:
      'Sistema de gestión de tareas con autenticación, CRUD, filtros, búsqueda, dashboard de métricas y control por usuario.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS'],
    demoUrl: '',
    repoUrl: 'https://github.com/jorge2360/laravel-task-manager',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold">Proyectos</h2>
      <p className="mt-4 text-slate-300">
        Proyectos desarrollados para fortalecer habilidades en desarrollo web, bases de datos,
        backend, frontend y análisis de sistemas.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <p className="text-sm font-medium text-blue-400">{project.category}</p>

            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Ver demo
                </a>
              )}

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Ver código
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection