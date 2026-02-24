import { Flame, Disc, Skull, Zap, MapPin, Users } from 'lucide-react';
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

      {/* --- 2. CAPA DE OSCURIDAD Y RUIDO --- */}
      <div className="absolute inset-0 z-0 bg-black/80"></div>
      
      {/* Ruido suave */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}
      ></div>

      {/* --- 3. CONTENIDO --- */}
      <div className="relative z-10 container mx-auto max-w-5xl">

        {/* Título encabezado */}
        <div className="flex items-center justify-center mb-16 animate-fade-in-up">
          <Flame className="w-8 h-8 md:w-10 md:h-10 text-red-600 mr-3 animate-pulse" />
          <h2
            className="text-5xl md:text-6xl font-black text-red-600 tracking-tighter uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            BIOGRAFÍA
          </h2>
          <Flame className="w-8 h-8 md:w-10 md:h-10 text-red-600 ml-3 animate-pulse" />
        </div>

        {/* Tarjeta de Contenido Principal */}
        <div className="bg-neutral-900/70 backdrop-blur-md border-2 border-neutral-800 shadow-[0_0_40px_rgba(0,0,0,0.9)] p-8 md:p-12 relative overflow-hidden group hover:border-red-900/60 transition-colors duration-500">
          
          {/* Calavera decorativa de fondo */}
          <Skull className="absolute -right-10 -bottom-10 w-64 h-64 text-black/30 rotate-12 z-0 pointer-events-none" />

          <div className="relative z-10 space-y-10 text-gray-300 font-normal text-base md:text-lg leading-relaxed text-justify">

            {/* INTRODUCCIÓN */}
            <div className="text-center space-y-4">
              <p className="text-2xl md:text-3xl font-black text-white italic tracking-wide mb-6">
                "El ruido no es solo ruido, es un <span className="text-red-600">ejercicio terapéutico</span>."
              </p>
              <p className="text-gray-400">
                <strong className="text-red-500 text-xl uppercase tracking-wider">Road to Hell</strong> es un proyecto musical que se posiciona en la vanguardia de la nueva corriente del hardcore. Su propuesta sonora se caracteriza por una ejecución técnica de riffs agudos, powerbeats contundentes y composiciones minimalistas, <strong className="text-white">priorizando la intensidad sobre la extensión</strong>.
              </p>
            </div>

            {/* GRID DE SECCIONES (2 Columnas en desktop, 1 en móvil) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              
              {/* Ruptura con la tradición */}
              <div className="bg-black/40 border-l-4 border-red-700 p-6 hover:bg-black/60 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>Una ruptura con la tradición</h3>
                </div>
                <p className="text-sm md:text-base text-gray-400">
                  A diferencia de las raíces tradicionales del género, nos distanciamos de los discursos convencionales de hermandad. Rechazamos la instigación al odio sectorizado para enfocarnos en una narrativa más cruda y universal: <span className="text-white font-semibold">la psique humana</span>. Nuestras letras encarnan la vivencia de la persona promedio, explorando las sombras del error, el odio, las pasiones y las debilidades para enfrentar el "infierno interno".
                </p>
              </div>

              {/* Visión y Filosofía */}
              <div className="bg-black/40 border-l-4 border-red-700 p-6 hover:bg-black/60 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>Visión y Filosofía</h3>
                </div>
                <p className="text-sm md:text-base text-gray-400">
                  Más que una banda cerrada, somos un colectivo unido por la pasión por el "ruido". Buscamos romper la "burbuja" del género, abogando por la unión entre el hardcore, punk, metal y crust. Bajo la premisa de que estos géneros comparten el ideal de <span className="text-white font-semibold">generar impacto</span>, el proyecto integra a todo aquel que se identifique con nuestro mensaje, sea dentro o fuera del escenario.
                </p>
              </div>

            </div>

            {/* Trayectoria (Ancho completo) */}
            <div className="border border-neutral-800 bg-neutral-950/50 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900 opacity-50"></div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider text-center" style={{ fontFamily: 'Impact, sans-serif' }}>Trayectoria y Evolución</h3>
              </div>
              <p className="text-center text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
                Fundada en 2015 a partir de las dinámicas del barrio y la exposición a la violencia, encontramos en el hardcore un vehículo de liberación. En casi una década, hemos recorrido escenarios en <span className="text-red-500 font-bold">Cali, Manizales, Pereira, Armenia y Bogotá</span>, destacando internacionalmente en el festival <span className="text-white font-bold">Kito Underground (Ecuador)</span>.
              </p>
            </div>

            {/* Cierre */}
            <p className="text-xl md:text-2xl font-black text-white border-t border-neutral-800 pt-8 mt-8 text-center uppercase tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>
              No hacemos compromisos. <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Solo hacemos ruido.</span>
            </p>

            {/* Influencias */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs text-red-600 font-bold uppercase tracking-widest mr-2 flex items-center gap-1">
                <Disc className="w-4 h-4" /> Influencias:
              </span>
              {['ULTRAMETAL', 'KNOCKED LOOSE', 'GODFLESH', 'GULCH'].map((band) => (
                <span key={band} className="px-4 py-1.5 bg-black border border-red-900/40 text-gray-300 text-xs font-bold tracking-widest hover:border-red-500 hover:text-white transition-all duration-300 cursor-default shadow-[0_0_10px_rgba(0,0,0,0.5)]">
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
