import ScrollReveal from "./ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section id="empresa" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary-darker px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
                Empieza a gestionar tu equipo hoy
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
                Gestiona documentos laborales, solicitudes y comunicaciones desde
                una sola plataforma. Todo en un solo clic.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://admin.grhin.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary-darker transition-all duration-200 hover:bg-gray-100 shadow-sm"
                >
                  Contactanos
                </a>
                <a
                  href="#funcionalidades"
                  className="inline-block rounded-lg border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Ver demo
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
