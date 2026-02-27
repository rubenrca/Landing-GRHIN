export default function BulkUploadAnimation() {
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
            <span className="font-medium text-white/70">admin.grhin.cl/carga-masiva</span>
          </div>
        </div>
      </div>

      {/* SVG Content */}
      <div className="aspect-[1440/960] bg-[#F8FAF8]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 960" width="100%" height="100%">
          <defs>
            <filter id="bu-shadow-sm" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.05" />
            </filter>
            <filter id="bu-shadow-md" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#000000" floodOpacity="0.06" />
            </filter>
            <style>{`
              .bu text { font-family: system-ui, -apple-system, sans-serif; }
              .bu .t-dark { fill: #1c2b2e; }
              .bu .t-gray { fill: #6b7b7f; }
              .bu .t-white { fill: #ffffff; }
              .bu .t-green { fill: #0D9488; }

              @keyframes buSlideDown {
                from { transform: translateY(-100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
              @keyframes buSlideRight {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
              @keyframes buFadeUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
              @keyframes buCursorMove {
                0% { transform: translate(1200px, 900px); opacity: 0; }
                10% { opacity: 1; }
                30% { transform: translate(450px, 480px); }
                35% { transform: translate(450px, 480px) scale(0.9); }
                40% { transform: translate(450px, 480px) scale(1); }
                60% { transform: translate(550px, 570px); }
                65% { transform: translate(550px, 570px) scale(0.9); }
                70% { transform: translate(550px, 570px) scale(1); opacity: 1; }
                85% { transform: translate(800px, 1000px); opacity: 0; }
                100% { transform: translate(1200px, 900px); opacity: 0; }
              }
              @keyframes buButtonClick {
                0%, 64% { fill: #0D9488; }
                65%, 70% { fill: #0F766E; }
                71%, 100% { fill: #0D9488; }
              }

              .bu .bu-nav { animation: buSlideDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) both; }
              .bu .bu-sidebar { animation: buSlideRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.3s both; }
              .bu .bu-header { animation: buFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.5s both; }
              .bu .bu-card { animation: buFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.7s both; }
              .bu .bu-f1 { animation: buFadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.9s both; }
              .bu .bu-f2 { animation: buFadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) 1.0s both; }
              .bu .bu-f3 { animation: buFadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) 1.1s both; }
              .bu .bu-submit { animation: buFadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) 1.2s both; }
              .bu .bu-instructions { animation: buFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 1.4s both; }
              .bu .bu-cursor { animation: buCursorMove 7s infinite 3s; opacity: 0; pointer-events: none; }
              .bu .bu-btn-click { animation: buButtonClick 7s infinite 3s; }
            `}</style>
          </defs>

          <g className="bu">
            <rect width="100%" height="100%" fill="#F8FAF8" />

            {/* SIDEBAR */}
            <g className="bu-sidebar">
              <rect x="0" y="70" width="280" height="890" fill="#F2F5F4" filter="url(#bu-shadow-md)" />
              <g transform="translate(25, 100)">
                <text x="10" y="20" fontSize="13" fontWeight="bold" fill="#8E9E8F" letterSpacing="1">NAVEGACION</text>
                <g transform="translate(12, 50)">
                  <g transform="translate(0, 0)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Inicio</text>
                  </g>
                  <g transform="translate(0, 55)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="bold" className="t-dark">Documentos</text>
                    <svg x="180" y="2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </g>
                  <g transform="translate(0, 110)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Solicitudes</text>
                  </g>
                  <g transform="translate(0, 165)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Comunicaciones</text>
                  </g>
                  <g transform="translate(0, 220)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Trabajadores</text>
                  </g>
                  <g transform="translate(0, 275)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Transacciones</text>
                  </g>
                  <g transform="translate(0, 330)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Libro Remuneraciones</text>
                  </g>
                  <g transform="translate(0, 385)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Honorarios</text>
                  </g>
                  <g transform="translate(0, 440)">
                    <svg x="0" y="-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <text x="33" y="12" fontSize="15" fontWeight="500" className="t-dark">Seleccion Personal</text>
                  </g>
                </g>
              </g>
              <text x="35" y="910" fontSize="13" fill="#8E9E8F">GRHIN v2.0</text>
            </g>

            {/* MAIN CONTENT */}
            <g transform="translate(320, 100)">
              <g className="bu-header">
                <text x="0" y="10" fontSize="15" fontWeight="500" className="t-green">
                  {"Menu "}
                  <tspan className="t-gray" fontWeight="normal"> //</tspan>
                </text>
                <g transform="translate(970, -15)">
                  <rect width="100" height="42" rx="8" fill="white" stroke="#d1d5db" strokeWidth="1" />
                  <text x="50" y="26" fontSize="15" fontWeight="500" className="t-dark" textAnchor="middle">Volver</text>
                </g>
              </g>

              <g transform="translate(0, 60)">
                <g className="bu-card">
                  <rect width="1070" height="640" rx="16" fill="white" filter="url(#bu-shadow-sm)" />
                  <text x="40" y="55" fontSize="24" fontWeight="bold" className="t-dark">Cargar Documentos en Carga Masiva</text>

                  {/* Tipo de Documento */}
                  <g transform="translate(40, 90)">
                    <g className="bu-f1">
                      <rect width="480" height="52" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
                      <text x="20" y="32" fontSize="16" className="t-dark">Tipo de Documento</text>
                      <svg x="440" y="16" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </g>
                  </g>

                  {/* Mes y Año */}
                  <g transform="translate(40, 170)">
                    <g className="bu-f2">
                      <rect width="230" height="52" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
                      <text x="20" y="32" fontSize="16" className="t-dark">Mes</text>
                      <svg x="190" y="16" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <g transform="translate(250, 0)">
                        <rect width="230" height="52" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
                        <text x="20" y="32" fontSize="16" className="t-dark">Año</text>
                        <svg x="190" y="16" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7b6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </g>
                    </g>
                  </g>

                  {/* File Input */}
                  <g transform="translate(40, 270)">
                    <g className="bu-f3">
                      <text x="5" y="-5" fontSize="12" fontWeight="bold" className="t-gray">Cargar archivo</text>
                      <rect width="480" height="56" rx="8" fill="#FAFAFA" stroke="#E2E8F0" strokeWidth="1.5" />
                      <rect x="6" y="8" width="160" height="40" rx="4" fill="#EAEAEA" stroke="#D1D5DB" strokeWidth="1" />
                      <text x="86" y="33" fontSize="14" className="t-dark" textAnchor="middle">Seleccionar archivo</text>
                      <text x="180" y="33" fontSize="15" className="t-dark">Sin archivos seleccionados</text>
                    </g>
                  </g>

                  {/* Submit Button */}
                  <g transform="translate(40, 370)">
                    <g className="bu-submit">
                      <rect className="bu-btn-click" width="480" height="50" rx="8" fill="#0D9488" />
                      <text x="240" y="31" fontSize="16" fontWeight="bold" className="t-white" textAnchor="middle">Carga Archivo Carga Masiva</text>
                    </g>
                  </g>

                  {/* Instructions Panel */}
                  <g transform="translate(560, 40)">
                    <g className="bu-instructions">
                      <rect width="470" height="560" rx="16" fill="#F8FAF8" />
                      <text x="30" y="45" fontSize="20" fontWeight="bold" className="t-dark">Paso a paso: Cargar Documentos en una carga</text>
                      <text x="30" y="70" fontSize="20" fontWeight="bold" className="t-dark">masiva en PDF</text>

                      <text x="30" y="115" fontSize="15" className="t-dark"><tspan fontWeight="bold">1.- Seleccionar el mes y año:</tspan> En la vista de cargar</text>
                      <text x="30" y="137" fontSize="15" className="t-dark">liquidaciones, seleccione el mes y el año correspondiente a las</text>
                      <text x="30" y="159" fontSize="15" className="t-dark">liquidaciones que vas a subir.</text>

                      <text x="30" y="200" fontSize="15" className="t-dark"><tspan fontWeight="bold">2.- Subir el archivo PDF:</tspan> Sube el PDF que contiene las</text>
                      <text x="30" y="222" fontSize="15" className="t-dark">liquidaciones. Asegurate de que cada pagina del documento</text>
                      <text x="30" y="244" fontSize="15" className="t-dark">corresponde a un trabajador diferente.</text>

                      <text x="30" y="285" fontSize="15" className="t-dark"><tspan fontWeight="bold">3.- Procesamiento del documento:</tspan> La plataforma separara</text>
                      <text x="30" y="307" fontSize="15" className="t-dark">automaticamente el PDF en varias paginas, asignando cada una</text>
                      <text x="30" y="329" fontSize="15" className="t-dark">al trabajador correspondiente segun el RUT identificado en</text>
                      <text x="30" y="351" fontSize="15" className="t-dark">cada pagina. Este proceso puede tomar algunos minutos.</text>

                      <text x="30" y="392" fontSize="15" className="t-dark"><tspan fontWeight="bold">4.- Revision de resultados:</tspan> Una vez completado el</text>
                      <text x="30" y="414" fontSize="15" className="t-dark">procesamiento, la plataforma te mostrara una lista con los</text>
                      <text x="30" y="436" fontSize="15" className="t-dark">documentos subidos. Esta lista incluira los nombres de los</text>
                      <text x="30" y="458" fontSize="15" className="t-dark">trabajadores y el nombre del documento en el formato: (tipo-</text>
                      <text x="30" y="480" fontSize="15" className="t-dark">documento)_mes_año_RUT.pdf.</text>
                    </g>
                  </g>
                </g>
              </g>
            </g>

            {/* TOP NAVBAR */}
            <g className="bu-nav">
              <rect width="1440" height="70" fill="#0F766E" filter="url(#bu-shadow-sm)" />
              <g transform="translate(30, 20)">
                <path d="M15 25 a10 10 0 0 1 -5 -18 a12 12 0 0 1 22 -2 a8 8 0 0 1 2 15 z" fill="#8FD88F" />
                <path d="M18 25 a8 8 0 0 1 -4 -14 a10 10 0 0 1 18 -1 a6 6 0 0 1 1 11 z" fill="#B8F0B8" opacity="0.5" />
                <text x="48" y="21" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">GRHIN</text>
              </g>
              <g transform="translate(1000, 18)">
                <g transform="translate(30, 0)">
                  <path d="M10 24 a2 2 0 0 0 4 0 H10 z M18 19 v-6 a6 6 0 0 0 -12 0 v6 l-2 2 v1 h16 v-1 l-2 -2 z" fill="#115E59" />
                  <circle cx="17" cy="6" r="7" fill="#F44336" />
                  <text x="17" y="9" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">12</text>
                </g>
                <text x="85" y="20" fontSize="15" fontWeight="500" fill="white">Empresa Demo - Administrador</text>
                <circle cx="360" cy="15" r="18" fill="none" stroke="white" strokeWidth="1.5" />
                <text x="360" y="21" fontSize="15" fontWeight="bold" fill="white" textAnchor="middle">AD</text>
              </g>
            </g>

            {/* CURSOR */}
            <g className="bu-cursor">
              <path d="M0,0 L24,24 L12,24 L6,36 Z" fill="white" stroke="#000" strokeWidth="1.5" filter="url(#bu-shadow-sm)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
