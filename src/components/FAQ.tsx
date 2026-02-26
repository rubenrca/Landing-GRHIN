"use client";

import { useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";

const faqs = [
  {
    question: "Que tipo de organizaciones pueden usar GRHIN?",
    answer:
      "GRHIN está diseñado para cualquier organización chilena que necesite gestionar trabajadores: colegios, fundaciones, empresas privadas y más. El sistema se adapta a organizaciones de cualquier tamaño.",
  },
  {
    question: "Puedo gestionar varias empresas desde una sola cuenta?",
    answer:
      "Si. GRHIN soporta gestión multi-empresa. Puedes administrar múltiples organizaciones con roles diferenciados (Admin, Trabajador) desde un único panel de control.",
  },
  {
    question: "Que documentos puedo subir a la plataforma?",
    answer:
      "Puedes subir contratos, anexos, certificados, reglamentos internos y cualquier documento laboral en formato PDF. Soportamos carga masiva e individual.",
  },
  {
    question: "¿Cómo funciona el sistema de solicitudes?",
    answer:
      "Los trabajadores pueden solicitar vacaciones, permisos y anticipos desde su portal. Los administradores reciben notificaciones y pueden aprobar o rechazar cada solicitud al instante.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Absolutamente. Utilizamos encriptacion de datos, servidores seguros y cumplimos con las normativas de proteccion de datos vigentes en Chile.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Preguntas frecuentes
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`relative rounded-xl border overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-primary/30 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {/* Indicador lateral */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl transition-opacity duration-300 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-base font-semibold text-text pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                  <div>
                    <div className="px-6 pb-5">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
