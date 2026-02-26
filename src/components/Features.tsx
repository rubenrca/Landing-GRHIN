import HeroAnimation from "./HeroAnimation";
import ScrollReveal from "./ui/ScrollReveal";

const benefits = [
  "Documentos centralizados",
  "Solicitudes al instante",
  "Gestion multi-empresa",
  "Reportes en tiempo real",
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Columna izquierda */}
            <div>
              <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mb-4">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447 1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.77l-3.365 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957L3.014 8.694c-.783-.57-.38-1.81.588-1.81h4.162L9.05 2.927z" />
                </svg>
                Funcionalidades
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text leading-tight">
                Beneficios que transforman tu gestion.
              </h2>

              <p className="mt-5 text-text-secondary leading-relaxed">
                Todo lo que necesitas para administrar tu equipo de forma
                eficiente, desde documentos hasta comunicaciones internas.
              </p>

              <div className="mt-10 space-y-0">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-6 py-4 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-sm font-semibold text-text-secondary tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold text-text">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: mockup */}
            <div>
              <HeroAnimation />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
