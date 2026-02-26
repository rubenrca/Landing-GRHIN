interface SectionDividerProps {
  variant?: "wave" | "curve" | "tilt";
  colorFrom: string;
  colorTo: string;
  flip?: boolean;
}

const paths = {
  wave: "M0,0 C240,80 480,10 720,50 C960,90 1200,20 1440,60 L1440,96 L0,96 Z",
  curve: "M0,0 Q720,96 1440,0 L1440,96 L0,96 Z",
  tilt: "M0,0 L1440,60 L1440,96 L0,96 Z",
};

export default function SectionDivider({
  variant = "wave",
  colorFrom,
  colorTo,
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      className="relative w-full h-16 md:h-24 -mt-px -mb-px"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Fondo completo con el color de la sección superior */}
        <rect width="1440" height="96" fill={colorFrom} />
        {/* Forma que introduce el color de la sección inferior */}
        <path d={paths[variant]} fill={colorTo} />
      </svg>
    </div>
  );
}
