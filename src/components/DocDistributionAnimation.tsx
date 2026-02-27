export default function DocDistributionAnimation() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/10">
      {/* Safari toolbar */}
      <div className="relative bg-gradient-to-b from-[#3a3a3c] to-[#2c2c2e] border-b border-white/5 px-3 py-2">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto max-w-[60%]">
          <div className="flex items-center justify-center gap-1.5 bg-white/10 rounded-md px-3 py-[5px] text-[11px] text-white/50">
            <svg className="h-[10px] w-[10px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="font-medium text-white/70">admin.grhin.cl/documentos</span>
          </div>
        </div>
      </div>

      {/* SVG Content */}
      <div className="aspect-[1440/960] bg-[#F8FAF8]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 960" width="100%" height="100%">
          <defs>
            <filter id="dd-shadow-sm" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.05" />
            </filter>
            <filter id="dd-shadow-md" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#000000" floodOpacity="0.08" />
            </filter>
            <filter id="dd-shadow-modal" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#000000" floodOpacity="0.15" />
            </filter>
            <style>{`
              .dd text { font-family: system-ui, -apple-system, sans-serif; }
              .dd .t-dark { fill: #1c2b2e; }
              .dd .t-gray { fill: #6b7b7f; }
              .dd .t-white { fill: #ffffff; }
              .dd .t-green { fill: #3A9A3D; }

              @keyframes ddSlideDown {
                from { transform: translateY(-100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
              @keyframes ddSlideRight {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
              @keyframes ddFadeUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
              @keyframes ddCursor {
                0% { transform: translate(1200px, 900px); opacity: 0; }
                8% { opacity: 1; }
                25% { transform: translate(1290px, 345px); }
                28% { transform: translate(1290px, 345px) scale(0.85); }
                31% { transform: translate(1290px, 345px) scale(1); }
                35% { transform: translate(1290px, 345px); opacity: 1; }
                45% { transform: translate(1140px, 115px); }
                65% { transform: translate(1140px, 115px); }
                68% { transform: translate(1140px, 115px) scale(0.85); }
                71% { transform: translate(1140px, 115px) scale(1); }
                85% { transform: translate(1200px, 900px); opacity: 0; }
                100% { transform: translate(1200px, 900px); opacity: 0; }
              }
              @keyframes ddModal {
                0%, 29% { opacity: 0; pointer-events: none; }
                33%, 69% { opacity: 1; pointer-events: auto; }
                73%, 100% { opacity: 0; pointer-events: none; }
              }
              @keyframes ddEyeHover {
                0%, 25% { stroke: #6b7b6d; stroke-width: 2; }
                26%, 34% { stroke: #3A9A3D; stroke-width: 2.5; }
                35%, 100% { stroke: #6b7b6d; stroke-width: 2; }
              }
              @keyframes ddCloseHover {
                0%, 65% { fill: #F3F4F6; }
                66%, 70% { fill: #E5E7EB; }
                71%, 100% { fill: #F3F4F6; }
              }

              .dd .dd-nav { animation: ddSlideDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) both; }
              .dd .dd-sidebar { animation: ddSlideRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.3s both; }
              .dd .dd-header { animation: ddFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.5s both; }
              .dd .dd-title { animation: ddFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.6s both; }
              .dd .dd-list { animation: ddFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.7s both; }
              .dd .dd-pagination { animation: ddFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.8s both; }
              .dd .dd-cursor { animation: ddCursor 10s infinite 2s; opacity: 0; pointer-events: none; }
              .dd .dd-modal { animation: ddModal 10s infinite 2s; opacity: 0; }
              .dd .dd-eye { animation: ddEyeHover 10s infinite 2s; }
              .dd .dd-close { animation: ddCloseHover 10s infinite 2s; }
            `}</style>
          </defs>

          <g className="dd">
            <rect width="100%" height="100%" fill="#F8FAF8" />

            {/* SIDEBAR */}
            <g className="dd-sidebar">
              <rect x="0" y="70" width="280" height="890" fill="#f0f7f0" filter="url(#dd-shadow-md)" />
              <g transform="translate(25, 100)">
                <text x="10" y="20" fontSize="13" fontWeight="bold" fill="#8E9E8F" letterSpacing="1">NAVEGACION</text>
                <g transform="translate(12, 50)">
                  {/* Inicio */}
                  <g transform="translate(0, 0)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Inicio</text>
                  </g>
                  {/* Documentos (Expandido) */}
                  <g transform="translate(0, 55)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="bold" className="t-dark">Documentos</text>
                    <svg x="180" y="2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </g>
                  {/* Submenú - Consultar Liquidaciones (Activo) */}
                  <g transform="translate(-37, 90)">
                    <rect width="280" height="46" fill="#ddf0dd" />
                    <rect width="4" height="46" fill="#3A9A3D" />
                    <svg x="49" y="13" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                    </svg>
                    <text x="70" y="27" fontSize="14" fontWeight="bold" className="t-dark">Consultar Liquidaciones</text>
                  </g>
                  {/* Consultar Contratos */}
                  <g transform="translate(12, 145)">
                    <svg x="0" y="0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    </svg>
                    <text x="21" y="13" fontSize="14" fontWeight="500" className="t-dark">Consultar Contratos y</text>
                    <text x="21" y="31" fontSize="14" fontWeight="500" className="t-dark">Anexos</text>
                  </g>
                  {/* Consultar Reglamentos */}
                  <g transform="translate(12, 195)">
                    <svg x="0" y="-3" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <text x="21" y="10" fontSize="14" fontWeight="500" className="t-dark">Consultar Reglamentos</text>
                  </g>
                  {/* Consultar Otros */}
                  <g transform="translate(12, 235)">
                    <svg x="0" y="0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    <text x="21" y="13" fontSize="14" fontWeight="500" className="t-dark">Consultar Otros</text>
                    <text x="21" y="31" fontSize="14" fontWeight="500" className="t-dark">Documentos</text>
                  </g>
                  {/* Solicitudes */}
                  <g transform="translate(0, 305)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Solicitudes</text>
                    <svg x="180" y="2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </g>
                  {/* Comunicaciones */}
                  <g transform="translate(0, 360)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Comunicaciones</text>
                  </g>
                </g>
              </g>
              <text x="35" y="910" fontSize="13" fill="#8E9E8F">GRHIN v2.0</text>
            </g>

            {/* MAIN CONTENT */}
            <g transform="translate(320, 100)">
              <g className="dd-header">
                <text x="0" y="10" fontSize="15" fontWeight="500" className="t-green">
                  {"Menu "}
                  <tspan className="t-gray" fontWeight="normal"> / Liquidaciones</tspan>
                </text>
                <g transform="translate(970, -15)">
                  <rect width="100" height="42" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1" />
                  <text x="50" y="26" fontSize="15" fontWeight="500" className="t-dark" textAnchor="middle">Volver</text>
                </g>
              </g>

              {/* Title */}
              <g transform="translate(40, 90)">
                <g className="dd-title">
                  <text x="0" y="0" fontSize="24" fontWeight="bold" className="t-dark">Liquidaciones</text>
                  <text x="0" y="25" fontSize="15" className="t-gray">1 documento</text>
                </g>
              </g>

              {/* Document pill */}
              <g transform="translate(40, 160)">
                <g className="dd-list">
                  <rect width="1030" height="96" rx="48" fill="white" filter="url(#dd-shadow-sm)" />
                  <circle cx="48" cy="48" r="26" fill="#f0f7f0" />
                  <svg x="36" y="36" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                  </svg>
                  <text x="95" y="42" fontSize="16" fontWeight="bold" className="t-dark">Liquidacion demo</text>
                  <text x="95" y="65" fontSize="14" className="t-gray">Febrero 2026</text>
                  <rect x="195" y="50" width="70" height="22" rx="6" fill="#E8F5E9" />
                  <text x="230" y="66" fontSize="12" fontWeight="bold" fill="#2E7D32" textAnchor="middle">Firmado</text>
                  {/* Eye icon */}
                  <svg className="dd-eye" x="930" y="36" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </g>
              </g>

              {/* Pagination */}
              <g transform="translate(40, 290)">
                <g className="dd-pagination">
                  <rect width="80" height="36" rx="18" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="40" y="23" fontSize="14" fill="#A0AAB0" textAnchor="middle">Anterior</text>
                  <text x="115" y="23" fontSize="14" fontWeight="500" className="t-green">1 de 1</text>
                  <rect x="150" width="85" height="36" rx="18" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="192" y="23" fontSize="14" fill="#A0AAB0" textAnchor="middle">Siguiente</text>
                  <rect x="910" width="120" height="36" rx="18" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="945" y="23" fontSize="14" className="t-dark">10 por pag.</text>
                  <svg x="995" y="10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </g>
              </g>
            </g>

            {/* TOP NAVBAR */}
            <g className="dd-nav">
              <rect width="1440" height="70" fill="#2D7A30" filter="url(#dd-shadow-sm)" />
              <g transform="translate(30, 20)">
                <path d="M15 25 a10 10 0 0 1 -5 -18 a12 12 0 0 1 22 -2 a8 8 0 0 1 2 15 z" fill="#8FD88F" />
                <path d="M18 25 a8 8 0 0 1 -4 -14 a10 10 0 0 1 18 -1 a6 6 0 0 1 1 11 z" fill="#B8F0B8" opacity="0.5" />
                <text x="48" y="21" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">GRHIN</text>
              </g>
              <g transform="translate(1000, 18)">
                <g transform="translate(30, 0)">
                  <path d="M10 24 a2 2 0 0 0 4 0 H10 z M18 19 v-6 a6 6 0 0 0 -12 0 v6 l-2 2 v1 h16 v-1 l-2 -2 z" fill="#1a5e1d" />
                  <circle cx="17" cy="6" r="7" fill="#e53e3e" />
                  <text x="17" y="9" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">64</text>
                </g>
                <text x="85" y="20" fontSize="15" fontWeight="500" fill="white">Empresa Demo - Administrador</text>
                <circle cx="360" cy="15" r="18" fill="none" stroke="white" strokeWidth="1.5" />
                <text x="360" y="21" fontSize="15" fontWeight="bold" fill="white" textAnchor="middle">AD</text>
              </g>
            </g>

            {/* MODAL - PDF Preview */}
            <g className="dd-modal">
              <rect width="1440" height="960" fill="#000000" opacity="0.6" />
              <g transform="translate(220, 60)" filter="url(#dd-shadow-modal)">
                <rect width="1000" height="840" rx="16" fill="white" />
                {/* Modal header */}
                <rect width="1000" height="70" rx="16" fill="white" />
                <path d="M0 70 h1000" stroke="#E2E8F0" strokeWidth="1" />
                <svg x="30" y="23" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A9A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                </svg>
                <text x="65" y="40" fontSize="16" fontWeight="bold" className="t-dark">Liquidacion demo.pdf</text>
                {/* Close button */}
                <g transform="translate(930, 15)">
                  <rect className="dd-close" width="40" height="40" rx="8" fill="#F3F4F6" />
                  <svg x="8" y="8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </g>
                {/* PDF viewer body */}
                <path d="M0 71 h1000 v753 a16 16 0 0 1 -16 16 h-968 a16 16 0 0 1 -16 -16 z" fill="#525659" />
                {/* Paper */}
                <g transform="translate(150, 110)">
                  <rect width="700" height="680" fill="white" filter="url(#dd-shadow-sm)" />
                  {/* Skeleton content */}
                  <rect x="50" y="50" width="120" height="40" fill="#E2E8F0" rx="4" />
                  <rect x="50" y="100" width="200" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="50" y="115" width="150" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="250" y="150" width="200" height="20" fill="#CBD5E1" rx="4" />
                  <rect x="280" y="180" width="140" height="12" fill="#E2E8F0" rx="4" />
                  <rect x="50" y="230" width="600" height="80" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" rx="4" />
                  <rect x="70" y="250" width="180" height="12" fill="#CBD5E1" rx="4" />
                  <rect x="350" y="250" width="180" height="12" fill="#CBD5E1" rx="4" />
                  <rect x="70" y="275" width="220" height="12" fill="#E2E8F0" rx="4" />
                  <rect x="350" y="275" width="200" height="12" fill="#E2E8F0" rx="4" />
                  {/* Table headers */}
                  <rect x="50" y="340" width="290" height="30" fill="#3A9A3D" rx="4" />
                  <rect x="360" y="340" width="290" height="30" fill="#3A9A3D" rx="4" />
                  {/* Rows left */}
                  <rect x="50" y="390" width="150" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="280" y="390" width="60" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="50" y="420" width="120" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="280" y="420" width="60" height="10" fill="#E2E8F0" rx="4" />
                  {/* Rows right */}
                  <rect x="360" y="390" width="140" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="590" y="390" width="60" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="360" y="420" width="100" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="590" y="420" width="60" height="10" fill="#E2E8F0" rx="4" />
                  <rect x="50" y="460" width="600" height="1" fill="#E2E8F0" />
                  {/* Totals */}
                  <rect x="450" y="490" width="100" height="14" fill="#CBD5E1" rx="4" />
                  <rect x="580" y="490" width="70" height="14" fill="#94A3B8" rx="4" />
                  <rect x="400" y="520" width="150" height="16" fill="#3A9A3D" rx="4" />
                  <rect x="570" y="520" width="80" height="16" fill="#3A9A3D" rx="4" />
                </g>
              </g>
            </g>

            {/* CURSOR */}
            <g className="dd-cursor">
              <path d="M0,0 L24,24 L12,24 L6,36 Z" fill="white" stroke="#000" strokeWidth="1.5" filter="url(#dd-shadow-sm)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
