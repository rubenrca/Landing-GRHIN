import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "GRHIN nos permite ahorrar tiempo y esfuerzo en la distribucion de documentos laborales como las liquidaciones de sueldo. Antes perdiamos horas entregando y enviando documentos. Funciona perfecto",
    name: "Rubén Collao",
    role: "Sostenedor",
    company: "Colegio Nuevo Milenio",
    initials: "RC",
    logo: "/milenio.webp",
  },
  {
    quote:
      "La gestion de solicitudes es increiblemente rapida. Nuestros profesores pueden solicitar permisos y recibir respuesta en el momento.",
    name: "Katherine Diaz",
    role: "Directora",
    company: "Fundacion Arcoiris",
    initials: "K",
    logo: "/arcoiris.webp",
  },
  {
    quote:
      "Con GRHIN ordenamos los procesos internos y dejamos de perseguir papeles. Todo queda registrado y es mucho mas facil hacer seguimiento a cada solicitud.",
    name: "José Torres",
    role: "Administrador",
    company: "NetClean",
    initials: "JT",
    logo: "/netclean.webp",
  },
  {
    quote:
      "La plataforma nos dio orden y claridad. Ahora tenemos historial de cada gestion, menos idas y vueltas y una comunicacion mucho mas fluida con el equipo.",
    name: "Jorge Avila",
    role: "Administrador",
    company: "Gescol",
    initials: "JA",
    logo: "/gescol.webp",
  },
  
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="relative rounded-2xl p-8 bg-white/70 backdrop-blur-sm border border-white/60 gradient-border h-full w-[350px] sm:w-[400px] flex-shrink-0">
      <span className="absolute -top-4 -left-1 text-7xl leading-none text-primary/10 font-serif select-none">
        &ldquo;
      </span>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-text-secondary leading-relaxed mb-6 italic text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-primary to-primary-dark">
            {testimonial.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-text">
              {testimonial.name}
            </p>
            <p className="text-xs text-text-secondary">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
        <Image
          src={testimonial.logo}
          alt={testimonial.company}
          width={80}
          height={32}
          className="h-6 w-auto object-contain opacity-40"
        />
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicamos los testimonios para el loop infinito
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Trust strip - full width, sin contenedor */}
      <div className="relative">
        {/* Fade izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        {/* Fade derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-6">
          {doubled.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
