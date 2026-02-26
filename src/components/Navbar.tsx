"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Empresa", href: "#empresa" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Logo className="h-8" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary-dark transition-colors animated-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://admin.grhin.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white bg-primary-dark hover:bg-primary-darker transition-all duration-200 btn-glow"
            >
              Iniciar Sesion
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            <svg
              className="h-6 w-6 text-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-text-secondary hover:text-primary-dark"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://admin.grhin.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-white bg-primary-dark hover:bg-primary-darker transition-colors"
            >
              Iniciar Sesion
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
