export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 hero-bg">
      {/* Formas decorativas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-primary-light/5 blur-3xl"
          style={{ animation: "float-reverse 10s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-20 left-[30%] w-64 h-64 rounded-full bg-primary-dark/5 blur-3xl"
          style={{ animation: "float 12s ease-in-out infinite 2s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">


          <h1 className="hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[1.1]">
            Gestion de{" "}
            <span className="text-primary">
              recursos humanos
            </span>{" "}
            simplificada
          </h1>

          <p className="hero-animate-3 mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            GRHIN te permite administrar trabajadores, documentos laborales,
            solicitudes y comunicaciones internas desde una sola plataforma.
            Disenado para organizaciones chilenas.
          </p>

          <div className="hero-animate-4 mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://admin.grhin.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 text-sm font-semibold text-white bg-primary-dark hover:bg-primary-darker transition-all duration-300 hover:shadow-[0_0_30px_rgba(76,184,79,0.3)] inline-flex items-center gap-2 shadow-lg btn-glow"
            >
              Probar GRHIN ahora
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#funcionalidades"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-text hover:bg-gray-50 transition-colors"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
