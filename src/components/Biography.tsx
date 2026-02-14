import { Flame, Disc, Skull } from 'lucide-react';


import bioBg from '../fotos/pngnegro.png'; 

export default function Biography() {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden bg-black flex items-center">

      {/* --- 1. IMAGEN DE FONDO (ESTÁTICA) --- */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* --- 2. CAPA DE OSCURIDAD (OVERLAY) --- */}
      {/* Esto es necesario para que el texto se lea sobre la textura. */}
      {/* Si está muy oscuro, cambia bg-black/80 a bg-black/60 */}
      <div className="absolute inset-0 z-0 bg-black/80"></div>
      
      {/* Ruido suave (Opcional, si te gusta el efecto "viejo") */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}>
      </div>

      {/* --- 3. CONTENIDO --- */}
      <div className="relative z-10 container mx-auto max-w-4xl">

        {/* Título encabezado */}
        <div className="flex items-center justify-center mb-12 animate-fade-in-up">
          <Flame className="w-8 h-8 md:w-10 md:h-10 text-red-600 mr-3 animate-pulse" />
          <h2
            className="text-5xl md:text-6xl font-black text-red-600 tracking-tighter uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            BIOGRAFÍA
          </h2>
          <Flame className="w-8 h-8 md:w-10 md:h-10 text-red-600 ml-3 animate-pulse" />
        </div>

        {/* Tarjeta de Contenido */}
        <div className="bg-neutral-900/60 backdrop-blur-sm border-2 border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] p-8 md:p-10 relative overflow-hidden group hover:border-red-900/50 transition-colors duration-500">
          
          {/* Calavera decorativa de fondo */}
          <Skull className="absolute -right-6 -bottom-6 w-48 h-48 text-black/40 rotate-12 z-0" />

          {/* TEXTO */}
          <div className="space-y-6 text-gray-400 font-normal text-base leading-relaxed relative z-10 text-justify">

            <p className="text-xl md:text-2xl font-black text-white italic tracking-wide text-center mb-6">
              "Nacidos en el underground, <span className="text-red-600">forjados en el caos</span>."
            </p>

            <p>
              <strong className="text-red-600">Road to Hell</strong> es un proyecto enmarcado en la nueva corriente del hardcore. 
              Adoptamos elementos de la vanguardia del género: riffs agudos, power beats y propuestas de violencia sonora de no más de 2 minutos.
            </p>

            <div className="border-l-2 border-red-900 pl-4 py-1 my-4 bg-black/20 text-sm md:text-base italic text-gray-500">
              Nos distanciamos de las raíces tradicionales. No somos hermandad ni fraternidad. 
              No nos interesa la política ni la religión. No instigamos al odio sectorizado.
            </div>

            <p>
              Nuestro mensaje es simple: encarnar la vivencia de cualquier persona promedio que obra mal, odia y tiene debilidades. 
              La cabeza es un infierno interno. La música estridente es nuestro puente terapéutico para hacerle frente a ese infierno.
            </p>

            <p>
              Somos un grupo de amigos unidos por una sola pasión: <strong className="text-white">el ruido y la bulla</strong>. 
              Road to Hell lo integra cualquiera que se identifique con este mensaje.
            </p>

            <p className="text-lg font-black text-white border-t border-gray-800 pt-6 mt-6 text-center uppercase tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>
              No hacemos compromisos. <span className="text-red-600">Solo hacemos ruido.</span>
            </p>

            {/* Influencias */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs text-red-600 font-bold uppercase tracking-widest mr-2 flex items-center gap-1">
                <Disc className="w-3 h-3" /> Influencias:
              </span>
              {['ULTRAMETAL', 'KNOCKED LOOSE', 'GODFLESH'].map((band) => (
                <span key={band} className="px-3 py-1 bg-black border border-red-900/50 text-gray-300 text-xs font-bold tracking-wider hover:border-red-600 transition-colors cursor-default">
                  {band}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}