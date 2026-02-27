import ScrollReveal from "./ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Accede a tu organización",
    description:
      "Accede a tu organización y administra a tu equipo en minutos.",
  },
  {
    number: "02",
    title: "Carga tus datos",
    description:
      "Carga tus trabajadores y documentos de forma masiva o individual.",
  },
  {
    number: "03",
    title: "Gestiona tus documentos",
    description:
      "Gestiona tus documentos de forma masiva o individual.",
  },
  {
    number: "04",
    title: "Comunica y reporta",
    description:
      "Publica comunicaciones internas y genera reportes automaticos para tu equipo.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Como funciona?
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              En 4 simples pasos tendras tu gestion de RRHH funcionando.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="stagger">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-primary/30 to-primary/10" />
                )}
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white mb-5 bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
