import HeroAnimation from "./HeroAnimation";
import ScrollReveal from "./ui/ScrollReveal";

export default function ProductPreview() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Conoce la plataforma
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Una interfaz intuitiva disenada para que gestionar tu equipo sea
              simple desde el primer dia.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <HeroAnimation />
        </ScrollReveal>
      </div>
    </section>
  );
}
