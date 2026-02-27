export default function Logo({ className = "h-8", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 48 36"
        fill="none"
        className="h-full w-auto"
        aria-hidden="true"
        style={inverted ? { filter: "brightness(0) invert(1)" } : undefined}
      >
        <defs>
          <linearGradient id="cloud-grad" x1="0" y1="0" x2="48" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8FD88F" />
            <stop offset="50%" stopColor="#4CB84F" />
            <stop offset="100%" stopColor="#3A9A3D" />
          </linearGradient>
          <linearGradient id="cloud-highlight" x1="10" y1="8" x2="22" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B8F0B8" />
            <stop offset="100%" stopColor="#6DD06D" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M38 30H12a10 10 0 01-1.5-19.9A12 12 0 0134 12a8 8 0 014 18z"
          fill="url(#cloud-grad)"
        />
        <path
          d="M18 28a8 8 0 01-2-15.7A9 9 0 0127 14c.3 0 .6 0 .9.1A8 8 0 0118 28z"
          fill="url(#cloud-highlight)"
          opacity="0.6"
        />
      </svg>
      <span className={`text-xl font-semibold tracking-wide ${inverted ? "text-white" : "text-[#3A9A3D]"}`}>
        GRHIN
      </span>
    </div>
  );
}
