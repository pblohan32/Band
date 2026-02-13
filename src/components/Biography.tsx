import { Flame, Disc, Skull } from 'lucide-react';
// 👇 CAMBIA 'fondobio.mp4' POR EL NOMBRE DE TU VIDEO
import bioVideo from '../videos/moshpit.mp4'; 

export default function Biography() {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden bg-black flex items-center">

      {/* --- FONDO DE VIDEO (LOOP) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline // Vital para celulares
          className="w-full h-full object-cover grayscale contrast-125 opacity-60" 
          // 👆 Grayscale y contrast alto para que se vea agresivo y no distraiga
        >
          <source src={bioVideo} type="video/mp4" />
        </video>
      </div>

      {/* --- CAPAS DE TEXTURA Y OSCURIDAD --- */}
      {/* 1. Gradiente para que el texto sea legible */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/90 to-black/60"></div>
      
      {/* 2. Textura de ruido (Noise) para efecto "cinta vieja" */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 container mx-auto max-w-5xl">

        {/* Título encabezado */}
        <div className="flex items-center justify-center mb-16 animate-fade-in-up">
          <Flame className="w-10 h-10 md:w-14 md:h-14 text-red-600 mr-4 animate-pulse" />
          <h2
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            BIOGRAFÍA
          </h2>
          <Flame className="w-10 h-10 md:w-14 md:h-14 text-red-600 ml-4 animate-pulse" />
        </div>

        {/* Tarjeta de Contenido */}
        <div className="bg-neutral-900/40 backdrop-blur-md border-l-4 border-red-600 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 md:p-12 relative overflow-hidden group">
          
          {/* Decoración de fondo en la tarjeta */}
          <Skull className="absolute -right-10 -bottom-10 w-64 h-64 text-red-900/10 rotate-12" />

          <div className="space-y-8 text-gray-300 leading-relaxed font-medium text-lg md:text-xl relative z-10">

            <p className="text-2xl md:text-3xl font-black text-white italic tracking-wide">
              "Nacidos en el underground, <span className="text-red-600">forjados en el caos</span>."
            </p>

            <p>
              <span className="text-red-500 font-bold uppercase tracking-wider">Road to Hell</span> es un proyecto enmarcado en la nueva corriente del hardcore. 
              Adoptamos elementos de la vanguardia del género: <span className="text-white font-bold">riffs agudos, power beats</span> y propuestas de violencia sonora de no más de 2 minutos.
            </p>

            <div className="border-l-2 border-red-900/50 pl-6 py-2 my-6 bg-black/20">
              <p className="italic text-gray-400">
                Nos distanciamos de las raíces tradicionales. <br/>
                <span className="text-red-500 font-bold">✖</span> No somos hermandad ni fraternidad.<br/>
                <span className="text-red-500 font-bold">✖</span> No nos interesa la política ni la religión.<br/>
                <span className="text-red-500 font-bold">✖</span> No instigamos al odio sectorizado.
              </p>
            </div>

            <p>
              Nuestro mensaje es simple: encarnar la vivencia de cualquier persona promedio que obra mal, odia y tiene debilidades. 
              La cabeza es un infierno interno. La música estridente es nuestro <span className="text-red-500 font-bold">puente terapéutico</span> para hacerle frente a ese infierno.
            </p>

            <p>
              Somos un grupo de amigos unidos por una sola pasión: <span className="text-white font-black decoration-red-600 underline decoration-4 underline-offset-4">EL RUIDO Y LA BULLA</span>. 
              Road to Hell lo integra cualquiera que se identifique con este mensaje.
            </p>

            <p className="text-2xl font-black text-white border-t border-gray-800 pt-8 mt-8 text-center uppercase tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>
              No hacemos compromisos. <span className="text-red-600">Solo hacemos ruido.</span>
            </p>

            {/* Sección de Influencias Mejorada */}
            <div className="mt-10 pt-4 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm">
                <Disc className="w-5 h-5" /> Influencias
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {['ULTRAMETAL', 'KNOCKED LOOSE', 'GODFLESH'].map((band) => (
                  <span key={band} className="px-4 py-1 bg-red-950/30 border border-red-900 text-red-400 text-sm font-bold tracking-wider hover:bg-red-600 hover:text-white transition-colors cursor-default">
                    {band}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}