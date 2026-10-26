import { PERFIL, CV_URL } from '@/lib/data'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-3d" aria-hidden>
        <HeroVisual />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">
          <i className="live" /> {PERFIL.rol} · {PERFIL.ciudad}
        </p>
        <h1>
          Sitios web que
          <br />
          <em>trabajan</em> por vos.
        </h1>
        <p className="hero-sub">{PERFIL.bajada}</p>
        <div className="hero-cta">
          <a href="#proyectos" className="btn">Ver proyectos</a>
          <a href={CV_URL} download className="btn btn-ghost">Descargar CV</a>
        </div>
      </div>
      <div className="hero-foot">
        <span>{PERFIL.marca}</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  )
}
