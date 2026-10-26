import { PERFIL, CONTACTO } from '@/lib/data'

export default function Nav() {
  return (
    <header className="nav">
      <a href="#inicio" className="nav-logo">
        <span className="nav-dot" />
        {PERFIL.nombre}
      </a>
      <nav className="nav-links">
        <a href="#proyectos">Proyectos</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a href={CONTACTO.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
        Hablemos
      </a>
    </header>
  )
}
