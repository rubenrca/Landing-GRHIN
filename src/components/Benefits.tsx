import ScrollReveal from "./ui/ScrollReveal";

const stats = [
  {
    number: "500+",
    label: "Trabajadores gestionados",
    description: "Perfiles activos administrados en la plataforma.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    number: "20+",
    label: "Empresas activas",
    description: "Organizaciones chilenas confian en GRHIN.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: "100%",
    label: "Disponibilidad",
    description: "Plataforma operativa las 24 horas, los 7 dias.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Ayudamos a las personas a hacer mas del{" "}
              <span className="text-primary">trabajo que importa.</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Estamos construyendo una forma de trabajar donde los procesos son
              mas faciles de documentar y mas rapidos de seguir. Donde las tareas
              administrativas pesan menos y queda espacio para lo que realmente
              importa.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="stagger">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative rounded-2xl p-8 text-center transition-all duration-300 bg-white/70 backdrop-blur-sm border border-gray-100 hover:shadow-[0_8px_30px_rgba(76,184,79,0.12)] hover:border-primary/20 hover:-translate-y-1 gradient-border"
              >
                <div className="flex justify-center mb-5 text-primary transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-primary-dark to-primary bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="mt-2 text-base font-semibold text-text">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
