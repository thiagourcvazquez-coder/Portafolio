import { PERFIL } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {PERFIL.nombre}</span>
      <span>{PERFIL.marca} · {PERFIL.ciudad}</span>
    </footer>
  )
}
