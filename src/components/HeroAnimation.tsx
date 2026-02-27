export default function HeroAnimation() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/10">
      {/* Safari toolbar — dark mode */}
      <div className="relative bg-gradient-to-b from-[#3a3a3c] to-[#2c2c2e] border-b border-white/5 px-3 py-2">
        {/* Semáforo */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Barra de dirección centrada */}
        <div className="mx-auto max-w-[60%]">
          <div className="flex items-center justify-center gap-1.5 bg-white/10 rounded-md px-3 py-[5px] text-[11px] text-white/50">
            <svg className="h-[10px] w-[10px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="font-medium text-white/70">admin.grhin.cl</span>
          </div>
        </div>
      </div>
      {/* Contenido del mockup */}
      <div className="aspect-[1440/960] bg-[#F8FAF8]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 960"
        width="100%"
        height="100%"
      >
        <defs>
          <filter id="shadow-sm" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.04" />
          </filter>
          <filter id="shadow-md" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#000000" floodOpacity="0.06" />
          </filter>

          <style>{`
            text { font-family: system-ui, -apple-system, sans-serif; }
            .text-dark { fill: #1a1a1a; }
            .text-gray { fill: #6b7280; }
            .text-white { fill: #ffffff; }
            .text-green { fill: #3A9A3D; }

            @keyframes slideDown {
              from { transform: translateY(-100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideRight {
              from { transform: translateX(-100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeUp {
              from { transform: translateY(30px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            @keyframes pulseGreen {
              0% { fill: #EDF7EE; }
              50% { fill: #DDF0DE; }
              100% { fill: #EDF7EE; }
            }
            @keyframes cursorMove {
              0% { transform: translate(1200px, 900px); opacity: 0; }
              10% { opacity: 1; }
              40% { transform: translate(485px, 850px); }
              45% { transform: translate(485px, 850px) scale(0.9); }
              50% { transform: translate(485px, 850px) scale(1); }
              70% { transform: translate(485px, 850px); opacity: 1; }
              80% { transform: translate(600px, 1000px); opacity: 0; }
              100% { transform: translate(1200px, 900px); opacity: 0; }
            }
            @keyframes buttonClick {
              0%, 44% { fill: #3A9A3D; }
              45%, 50% { fill: #2D7A30; }
              51%, 100% { fill: #3A9A3D; }
            }

            .nav-anim { animation: slideDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) both; }
            .sidebar-anim { animation: slideRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.3s both; }

            .card-header { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.6s both; }
            .card-1 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.8s both; }
            .card-2 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.9s both; }
            .card-3 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.0s both; }

            .card-section-2 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.2s both; }
            .card-4 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.3s both; }
            .card-5 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.4s both; }

            .card-section-3 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.6s both; }
            .card-6 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.7s both; }
            .card-7 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.8s both; }
            .card-8 { animation: fadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.9s both; }

            .alert-card-bg { animation: pulseGreen 3s infinite 2.5s; fill: #EDF7EE; }
            .cursor-anim { animation: cursorMove 6s infinite 3s; opacity: 0; pointer-events: none; }
            .interactive-btn { animation: buttonClick 6s infinite 3s; }
          `}</style>
        </defs>

        {/* Fondo Base */}
        <rect width="100%" height="100%" fill="#F8FAF8" />

        {/* SIDEBAR */}
        <g className="sidebar-anim">
          <rect x="0" y="70" width="280" height="890" fill="#f0f7f0" filter="url(#shadow-md)" />

          <g transform="translate(25, 100)">
            <text x="10" y="20" fontSize="13" fontWeight="bold" fill="#8E9E8F" letterSpacing="1">NAVEGACION</text>

            {/* Item Activo */}
            <g transform="translate(0, 40)">
              <rect width="230" height="44" rx="10" fill="#ddf0dd" />
              <svg x="12" y="12" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <text x="45" y="27" fontSize="15" fontWeight="bold" className="text-dark">Inicio</text>
            </g>

            {/* Menu Items */}
            <g transform="translate(12, 100)">
              <g transform="translate(0, 0)">
                <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <text x="33" y="12" fontSize="15" fontWeight="500" className="text-dark">Documentos</text>
              </g>
              <g transform="translate(0, 55)">
                <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <text x="33" y="12" fontSize="15" fontWeight="500" className="text-dark">Solicitudes</text>
              </g>
              <g transform="translate(0, 110)">
                <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <text x="33" y="12" fontSize="15" fontWeight="500" className="text-dark">Comunicaciones</text>
              </g>
              <g transform="translate(0, 165)">
                <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <text x="33" y="12" fontSize="15" fontWeight="500" className="text-dark">Trabajadores</text>
              </g>
              <g transform="translate(0, 220)">
                <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <polyline points="23 20 23 14 17 14" />
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                </svg>
                <text x="33" y="12" fontSize="15" fontWeight="500" className="text-dark">Transacciones</text>
              </g>
              <g transform="translate(0, 275)">
                <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <text x="33" y="12" fontSize="15" fontWeight="500" className="text-dark">Libro Remuneraciones</text>
              </g>
              <g transform="translate(0, 330)">
                <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <text x="33" y="12" fontSize="15" fontWeight="500" className="text-dark">Honorarios</text>
              </g>
            </g>
          </g>
          <text x="35" y="910" fontSize="13" fill="#8E9E8F">GRHIN v2.0</text>
        </g>

        {/* MAIN CONTENT AREA */}
        <g transform="translate(320, 100)">
          {/* Breadcrumb & Header */}
          <g className="card-header">
            <text x="0" y="10" fontSize="15" fontWeight="500" className="text-green">
              {"Menu "}
              <tspan className="text-gray" fontWeight="normal"> / /</tspan>
            </text>

            <g transform="translate(970, -15)">
              <rect width="100" height="42" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1" />
              <text x="50" y="26" fontSize="15" fontWeight="500" className="text-dark" textAnchor="middle">Volver</text>
            </g>

            <text x="0" y="65" fontSize="32" fontWeight="bold" className="text-dark">Colegio de Prueba S.A.</text>
            <text x="0" y="95" fontSize="18" className="text-gray">Plataforma de Gestion Administrativa</text>
          </g>

          {/* SECCION 1 */}
          <text x="0" y="160" fontSize="20" fontWeight="bold" className="text-dark card-header">Que quieres realizar?</text>

          <g transform="translate(0, 190)">
            <g className="card-1">
              <rect width="330" height="170" rx="16" fill="white" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Cargas Masivas</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Sube archivos en formato PDF</text>
              <text x="25" y="85" fontSize="14" className="text-gray">mediante procesos de carga masiva.</text>
              <rect x="25" y="110" width="280" height="42" rx="21" fill="#3A9A3D" />
              <svg x="70" y="121" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <text x="175" y="136" fontSize="15" fontWeight="bold" className="text-white" textAnchor="middle">Subir Carga Masiva</text>
            </g>
          </g>

          <g transform="translate(370, 190)">
            <g className="card-2">
              <rect width="330" height="170" rx="16" fill="white" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Documentos Individuales</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Sube contratos, anexos y otros</text>
              <text x="25" y="85" fontSize="14" className="text-gray">documentos unicos por trabajador.</text>
              <rect x="25" y="110" width="280" height="42" rx="21" fill="#3A9A3D" />
              <svg x="70" y="121" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              <text x="175" y="136" fontSize="15" fontWeight="bold" className="text-white" textAnchor="middle">Subir Documentos</text>
            </g>
          </g>

          <g transform="translate(740, 190)">
            <g className="card-3">
              <rect width="330" height="170" rx="16" fill="white" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Documentos Generales</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Publica documentos asignados a</text>
              <text x="25" y="85" fontSize="14" className="text-gray">toda tu organizacion facilmente.</text>
              <rect x="25" y="110" width="280" height="42" rx="21" fill="#3A9A3D" />
              <svg x="70" y="121" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <text x="175" y="136" fontSize="15" fontWeight="bold" className="text-white" textAnchor="middle">Subir Documentos</text>
            </g>
          </g>

          {/* SECCION 2 */}
          <text x="0" y="420" fontSize="20" fontWeight="bold" className="text-dark card-section-2">Consultar Datos</text>

          <g transform="translate(0, 450)">
            <g className="card-4">
              <rect width="515" height="150" rx="16" fill="white" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Documentos de la Empresa</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Revisa y administra todos los documentos institucionales subidos.</text>
              <rect x="25" y="90" width="465" height="40" rx="20" fill="white" stroke="#3A9A3D" strokeWidth="1.5" />
              <svg x="145" y="100" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="11.5" cy="14.5" r="2.5" />
                <line x1="13.27" y1="16.27" x2="16" y2="19" />
              </svg>
              <text x="267" y="115" fontSize="15" fontWeight="bold" className="text-green" textAnchor="middle">Consultar Documentos</text>
            </g>
          </g>

          <g transform="translate(555, 450)">
            <g className="card-5">
              <rect width="515" height="150" rx="16" fill="white" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Trabajadores</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Visualiza y actualiza los perfiles y datos de tu personal.</text>
              <rect x="25" y="90" width="465" height="40" rx="20" fill="white" stroke="#3A9A3D" strokeWidth="1.5" />
              <svg x="145" y="100" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <text x="267" y="115" fontSize="15" fontWeight="bold" className="text-green" textAnchor="middle">Gestionar Trabajadores</text>
            </g>
          </g>

          {/* SECCION 3 */}
          <text x="0" y="660" fontSize="20" fontWeight="bold" className="text-dark card-section-3">Gestion y Comunicaciones</text>

          <g transform="translate(0, 690)">
            <g className="card-6">
              <rect className="alert-card-bg" width="330" height="170" rx="16" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Solicitudes</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Tienes 2 solicitud(es) pendiente(s)</text>
              <text x="25" y="85" fontSize="14" className="text-gray">revisa los detalles aqui.</text>
              <rect className="interactive-btn" x="25" y="110" width="280" height="42" rx="21" />
              <svg x="65" y="121" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <text x="175" y="136" fontSize="15" fontWeight="bold" className="text-white" textAnchor="middle">Gestionar Solicitudes</text>
            </g>
          </g>

          <g transform="translate(370, 690)">
            <g className="card-7">
              <rect width="330" height="170" rx="16" fill="white" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Comunicaciones</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Publica y difunde noticias a toda</text>
              <text x="25" y="85" fontSize="14" className="text-gray">la comunidad de tu institucion.</text>
              <rect x="25" y="110" width="280" height="40" rx="20" fill="white" stroke="#3A9A3D" strokeWidth="1.5" />
              <svg x="65" y="120" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <text x="175" y="135" fontSize="15" fontWeight="bold" className="text-green" textAnchor="middle">Publicar Comunicacion</text>
            </g>
          </g>

          <g transform="translate(740, 690)">
            <g className="card-8">
              <rect width="330" height="170" rx="16" fill="white" filter="url(#shadow-sm)" />
              <text x="25" y="40" fontSize="17" fontWeight="bold" className="text-dark">Denuncias Ley Karin</text>
              <text x="25" y="65" fontSize="14" className="text-gray">Bandeja de gestion para denuncias</text>
              <text x="25" y="85" fontSize="14" className="text-gray">y reportes de convivencia.</text>
              <rect x="25" y="110" width="280" height="40" rx="20" fill="white" stroke="#3A9A3D" strokeWidth="1.5" />
              <svg x="65" y="120" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <text x="175" y="135" fontSize="15" fontWeight="bold" className="text-green" textAnchor="middle">Revisar Denuncias</text>
            </g>
          </g>
        </g>

        {/* TOP NAVBAR */}
        <g className="nav-anim">
          <rect width="1440" height="70" fill="#2D7A30" filter="url(#shadow-sm)" />

          <g transform="translate(30, 20)">
            <path d="M15 25 a10 10 0 0 1 -5 -18 a12 12 0 0 1 22 -2 a8 8 0 0 1 2 15 z" fill="#8FD88F" />
            <path d="M18 25 a8 8 0 0 1 -4 -14 a10 10 0 0 1 18 -1 a6 6 0 0 1 1 11 z" fill="#B8F0B8" opacity="0.5" />
            <text x="48" y="21" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">GRHIN</text>
          </g>

          <g transform="translate(1000, 18)">
            <g transform="translate(30, 0)">
              <path d="M10 24 a2 2 0 0 0 4 0 H10 z M18 19 v-6 a6 6 0 0 0 -12 0 v6 l-2 2 v1 h16 v-1 l-2 -2 z" fill="#1a5e1d" />
              <circle cx="17" cy="6" r="7" fill="#e53e3e" />
              <text x="17" y="9" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">12</text>
            </g>

            <text x="85" y="20" fontSize="15" fontWeight="500" fill="white">Empresa Demo - Administrador</text>

            <circle cx="360" cy="15" r="18" fill="none" stroke="white" strokeWidth="1.5" />
            <text x="360" y="21" fontSize="15" fontWeight="bold" fill="white" textAnchor="middle">AD</text>
          </g>
        </g>

        {/* CURSOR ANIMADO */}
        <g className="cursor-anim">
          <path d="M0,0 L24,24 L12,24 L6,36 Z" fill="white" stroke="#000" strokeWidth="1.5" filter="url(#shadow-sm)" />
        </g>
      </svg>
      </div>
    </div>
  );
}
