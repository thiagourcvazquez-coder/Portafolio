import { CONTACTO, PERFIL, CV_URL } from '@/lib/data'
import Reveal from './Reveal'

export default function Contacto() {
  return (
    <section id="contacto" className="seccion contacto">
      <Reveal>
        <p className="eyebrow">Contacto</p>
        <h2>¿Tenés un proyecto <em>en mente</em>?</h2>
        <p className="contacto-sub">
          Contame qué necesitás y te respondo con una propuesta. Trabajo con clientes de {PERFIL.ciudad} y de todo el país.
        </p>
        <div className="hero-cta">
          <a href={CONTACTO.whatsapp} target="_blank" rel="noopener noreferrer" className="btn">Escribime por WhatsApp</a>
          <a href={CV_URL} download className="btn btn-ghost">Descargar CV</a>
          <a href={CONTACTO.email} className="btn btn-ghost">thiagovazquezalm@gmail.com</a>
          <a href={CONTACTO.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Instagram</a>
          <a href={CONTACTO.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  )
}
