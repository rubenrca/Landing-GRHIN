import ScrollReveal from "./ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section id="empresa" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center bg-primary-darker"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
                Empieza a gestionar tu equipo hoy
              </h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
                Gestiona documentos laborales, solicitudes y comunicaciones desde
                una sola plataforma. Todo en un solo clic.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://admin.grhin.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-darker transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Ver demo
                </a>
                <a
                  href="#funcionalidades"
                  className="inline-block rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Funcionalidades
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
