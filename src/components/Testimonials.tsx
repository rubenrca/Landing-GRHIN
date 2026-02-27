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
      "La gestion de solicitudes es increiblemente rapida. Nuestros profesores pueden pedir vacaciones y recibir respuesta en el momento.",
    name: "Roberto Fuentes",
    role: "Administrador",
    company: "Fundacion Arcoiris",
    initials: "RF",
    logo: "/arcoiris.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="stagger">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-2xl p-8 transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/60 hover:shadow-[0_8px_30px_rgba(20,184,166,0.08)] gradient-border"
              >
                {/* Comilla decorativa */}
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

                <p className="text-text-secondary leading-relaxed mb-6 italic">
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
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
