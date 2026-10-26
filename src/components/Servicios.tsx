import { SERVICIOS, STACK } from '@/lib/data'
import Reveal from './Reveal'

export default function Servicios() {
  return (
    <section id="servicios" className="seccion">
      <Reveal>
        <p className="eyebrow">Qué hago</p>
        <h2>De la idea <em>al deploy</em></h2>
      </Reveal>
      <div className="servicios">
        {SERVICIOS.map((s, i) => (
          <Reveal key={s.n} delay={i * 70} className="servicio">
            <span className="s-n">{s.n}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </Reveal>
        ))}
      </div>
      <div className="marquee" aria-label="Tecnologías">
        <div className="marquee-track">
          {[...STACK, ...STACK].map((t, i) => (
            <span key={i}>{t}<b>✦</b></span>
          ))}
        </div>
      </div>
    </section>
  )
}
