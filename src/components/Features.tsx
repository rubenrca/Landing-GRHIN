"use client";

import { useState } from "react";
import HeroAnimation from "./HeroAnimation";
import BulkUploadAnimation from "./BulkUploadAnimation";
import DocDistributionAnimation from "./DocDistributionAnimation";
import ScrollReveal from "./ui/ScrollReveal";

const features = [
  {
    label: "Panel de administracion",
    description: "Vista general del sistema con accesos directos a todas las funcionalidades.",
  },
  {
    label: "Carga masiva de documentos",
    description: "Sube liquidaciones y documentos en PDF de forma masiva para todos tus trabajadores.",
  },
  {
    label: "Distribucion de documentos",
    description: "Asigna y distribuye documentos a trabajadores de forma individual o grupal.",
  },
  {
    label: "Gestion de solicitudes",
    description: "Aprueba o rechaza solicitudes de vacaciones, permisos y anticipos.",
  },
];

const mockups: Record<number, React.ReactNode> = {
  0: <HeroAnimation />,
  1: <BulkUploadAnimation />,
  2: <DocDistributionAnimation />,
};

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div>
              <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mb-4">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447 1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.77l-3.365 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957L3.014 8.694c-.783-.57-.38-1.81.588-1.81h4.162L9.05 2.927z" />
                </svg>
                Funcionalidades
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text leading-tight">
                Un software que transforma tu gestion de RRHH.
              </h2>

              <p className="mt-5 text-text-secondary leading-relaxed">
                Todo lo que necesitas para administrar tu equipo de forma
                eficiente, desde documentos hasta comunicaciones internas.
              </p>

              <div className="mt-10 space-y-0">
                {features.map((feature, index) => (
                  <button
                    key={feature.label}
                    onClick={() => setActive(index)}
                    className={`w-full flex items-start gap-6 py-4 border-b border-gray-200 last:border-b-0 text-left transition-colors duration-200 cursor-pointer ${
                      active === index ? "" : "group"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold tabular-nums mt-0.5 transition-colors duration-200 ${
                        active === index ? "text-primary" : "text-text-secondary group-hover:text-text"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-base font-semibold transition-colors duration-200 ${
                          active === index ? "text-primary" : "text-text group-hover:text-text"
                        }`}
                      >
                        {feature.label}
                      </span>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          active === index ? "max-h-20 opacity-100 mt-1.5" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`mt-1 h-2 w-2 rounded-full shrink-0 transition-colors duration-200 ${
                        active === index ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right column: mockup */}
            <div className="relative">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {mockups[index] ?? (
                    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 aspect-[1440/960] flex items-center justify-center">
                      <p className="text-text-secondary text-lg">Proximamente</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
