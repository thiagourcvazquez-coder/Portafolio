import { PROYECTOS } from '@/lib/data'
import Reveal from './Reveal'

export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion">
      <Reveal>
        <p className="eyebrow">Trabajo seleccionado</p>
        <h2>Proyectos <em>en producción</em></h2>
      </Reveal>

      <div className="proyectos">
        {PROYECTOS.map((p, i) => (
          <Reveal key={p.id} className={`proyecto${i % 2 ? ' inv' : ''}`}>
            <div className="p-media" style={{ ['--c' as string]: p.color }}>
              {p.captura ? (
                <div className="p-browser">
                  <div className="p-bar"><i /><i /><i /></div>
                  <img src={p.captura} alt={`Captura de ${p.nombre}`} loading="lazy" />
                </div>
              ) : (
                <div className="p-browser p-vacio">
                  <img src={p.logo} alt={p.nombre} />
                </div>
              )}
            </div>
            <div className="p-info">
              <p className="p-meta">
                <span>{String(i + 1).padStart(2, '0')}</span> {p.tipo} · {p.anio}
              </p>
              <h3>{p.nombre}</h3>
              <p className="p-resumen">{p.resumen}</p>
              <ul className="p-puntos">
                {p.puntos.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className="p-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Ver sitio en vivo ↗
                </a>
              ) : (
                <span className="p-nolink">Proyecto privado</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
