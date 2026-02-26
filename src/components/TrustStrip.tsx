import Image from "next/image";

const logos = [
  { src: "/milenio.webp", alt: "Milenio" },
  { src: "/arcoiris.webp", alt: "Arcoiris" },
];

export default function TrustStrip() {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full py-5 bg-primary-darker text-white overflow-hidden">
      <p className="text-xs text-white/50 text-center mb-4 uppercase tracking-wider font-medium">
        Ya confiaron en nosotros
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-primary-darker to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-primary-darker to-transparent z-10" />

        <div className="marquee-track">
          {repeatedLogos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-60 mx-10 brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
