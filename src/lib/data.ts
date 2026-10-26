export const PERFIL = {
  nombre: 'Thiago Vázquez',
  rol: 'Desarrollador web full stack',
  marca: 'TM Soluciones Digitales',
  ciudad: 'Salta, Argentina',
  bajada:
    'Diseño y desarrollo sitios y sistemas que reservan, cobran y se administran solos. De la idea al deploy, con Next.js, React y Supabase.',
}

export const CONTACTO = {
  whatsapp: 'https://wa.me/5493875067991?text=Hola%20Thiago%2C%20vi%20tu%20portafolio%20y%20quiero%20consultarte%20por%20un%20proyecto.',
  instagram: 'https://instagram.com/tmsolucionesdigitales',
  linkedin: 'https://linkedin.com/company/tm-soluciones-digitales/',
}

export type Proyecto = {
  id: string
  nombre: string
  tipo: string
  anio: string
  resumen: string
  puntos: string[]
  stack: string[]
  captura: string | null
  logo: string
  url: string | null
  color: string
}

export const PROYECTOS: Proyecto[] = [
  {
    id: 'estudio-penal',
    nombre: 'Vazquez Estudio Penal',
    tipo: 'Sitio institucional + backoffice',
    anio: '2026',
    resumen:
      'Presencia web para un estudio jurídico penal de Salta: landing con SEO local, formulario de consultas y un panel para publicar novedades.',
    puntos: [
      'Formulario de consultas: se guarda en la base y avisa por mail al instante.',
      'Backoffice protegido: ABM de novedades con imágenes y bandeja de consultas.',
      'SEO técnico con datos estructurados (schema.org LegalService).',
    ],
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'Supabase', 'Nodemailer', 'Vercel'],
    captura: '/proyectos/estudio.png',
    logo: '/proyectos/estudio-logo.webp',
    url: 'https://vazquezestudiopenal.com.ar',
    color: '#c1272d',
  },
  {
    id: 'don-valdez',
    nombre: 'Don Valdez Barber Studio',
    tipo: 'Turnero online + pagos',
    anio: '2026',
    resumen:
      'Sistema de reservas para una barbería: el cliente elige servicio y horario, paga la seña online y el turno queda confirmado solo.',
    puntos: [
      'Turnero con disponibilidad por horario y servicio.',
      'Seña con Mercado Pago Checkout Pro y confirmación por webhook.',
      'Comentarios de clientes y panel de administración para el dueño.',
    ],
    stack: ['Next.js 16', 'React 19', 'Supabase', 'Mercado Pago', 'Tailwind 4', 'zod'],
    captura: '/proyectos/donvaldez.png',
    logo: '/proyectos/donvaldez-logo.png',
    url: 'https://don-valdez.vercel.app',
    color: '#1f4a37',
  },
  {
    id: 'punto-norte',
    nombre: 'Punto Norte',
    tipo: 'Plataforma para colectivo musical',
    anio: '2026',
    resumen:
      'Plataforma para un colectivo de productores y artistas de la escena urbana: producción, beats, mezcla y mastering, con backend propio.',
    puntos: [
      'Frontend en Next.js con componentes shadcn/ui.',
      'API propia en Fastify + Prisma con integración de Mercado Pago y Spotify.',
      'Backoffice separado en React + Vite para la gestión interna.',
    ],
    stack: ['Next.js', 'React', 'Fastify', 'Prisma', 'Supabase', 'Mercado Pago', 'Vite'],
    captura: null,
    logo: '/proyectos/puntonorte-logo.png',
    url: null,
    color: '#7c5cff',
  },
]

export const SERVICIOS = [
  { n: '01', t: 'Sitios institucionales', d: 'Landing rápidas, responsive y pensadas para posicionar en Google y convertir consultas.' },
  { n: '02', t: 'Reservas y pagos', d: 'Turneros y tiendas con Mercado Pago, webhooks y confirmación automática.' },
  { n: '03', t: 'Paneles de administración', d: 'Backoffice con login para que el cliente cargue y gestione su contenido sin depender de nadie.' },
  { n: '04', t: 'Sistemas a medida', d: 'APIs, bases de datos y automatizaciones para ordenar procesos que hoy se hacen a mano.' },
]

export const STACK = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Mercado Pago',
  'Tailwind', 'Three.js', 'Prisma', 'Fastify', 'Vercel',
]
