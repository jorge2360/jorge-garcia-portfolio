import { Code, Database, ShieldCheck, Server, Workflow } from 'lucide-react'

const areas = [
  {
    title: 'Desarrollo Web',
    description: 'Creación de aplicaciones web, interfaces responsivas y consumo de APIs.',
    icon: Code,
  },
  {
    title: 'Bases de Datos',
    description: 'Diseño, consulta y administración básica de bases de datos relacionales.',
    icon: Database,
  },
  {
    title: 'Análisis de Sistemas',
    description: 'Comprensión de procesos, requerimientos y documentación técnica.',
    icon: Workflow,
  },
  {
    title: 'Ciberseguridad Junior',
    description: 'Interés en buenas prácticas de seguridad, control de accesos y protección de datos.',
    icon: ShieldCheck,
  },
  {
    title: 'Soporte e Infraestructura',
    description: 'Conocimiento en entornos Windows, Linux y herramientas técnicas.',
    icon: Server,
  },
]

function AreasSection() {
  return (
    <section id="areas" className="fade-up mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold">Áreas de interés profesional</h2>
      <p className="mt-4 text-slate-300">
        Áreas en las que busco desarrollarme profesionalmente como perfil junior.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {areas.map((area) => {
          const Icon = area.icon

          return (
            <article
              key={area.title}
              className="fade-up rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 text-slate-400">{area.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AreasSection