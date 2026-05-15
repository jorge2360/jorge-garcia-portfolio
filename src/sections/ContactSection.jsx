import { Mail, User, Code2 } from 'lucide-react'

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h2 className="text-3xl font-bold">Contacto</h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Estoy abierto a oportunidades junior en desarrollo web, análisis de sistemas,
          bases de datos, soporte técnico y áreas relacionadas con tecnología.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jorgeg23600@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            <Mail size={20} />
            Correo
          </a>

          <a
            href="https://github.com/jorge2360"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 hover:bg-slate-800"
          >
            <Code2 size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jorge-garcía-0628b8222"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 hover:bg-slate-800"
          >
            <User size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection