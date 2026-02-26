import Logo from "./Logo";

const footerLinks = {
  Producto: [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Precios", href: "#" },
  ],
  Empresa: [
    { label: "Sobre nosotros", href: "#empresa" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Terminos", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-primary-darker/50 text-white bg-primary-darker">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo className="h-8" inverted />
            <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-xs">
              Sistema de gestion de recursos humanos para organizaciones
              chilenas. Desarrollado por integrIA.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} GRHIN. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-white/80">
            Colaborando con{" "}
            <a href="#" className="hover:underline font-medium text-white">
              integrIA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
