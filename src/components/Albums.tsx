import { Disc3, Play, Skull } from 'lucide-react';

// --- ZONA DE IMPORTACIÓN DE PORTADAS ---
// Ajusta la extensión (.jpg o .png) según tus archivos reales
import interiorCover from '../fotos/interior.jpg';
import holocaustCover from '../fotos/holocaust.jpg';
import disgustingCover from '../fotos/disgusting.jpg';
import moralDecayCover from '../fotos/moral_decay.jpg';

interface Album {
  title: string;
  year: number;
  cover: string;
  tracks: string[];
  description: string;
}

export default function Albums() {
  const albums: Album[] = [
    {
      title: "EN MI INTERIOR",
      year: 2018,
      cover: interiorCover,
      tracks: ["Intro", "En Mi Interior", "Falsa Realidad", "Odio Puro", "Sin Salida"],
      description: "El inicio de la pesadilla. Sonido crudo y visceral que definió nuestra identidad."
    },
    {
      title: "HOLOCAUST",
      year: 2022,
      cover: holocaustCover,
      tracks: ["Holocaust", "Warzone", "Extinction", "Toxic Breed", "Nuclear Winter", "Human Waste"],
      description: "La brutalidad elevada al máximo. Un ataque sonoro sin compasión."
    },
    {
      title: "DISGUSTING",
      year: 2023,
      cover: disgustingCover,
      tracks: ["Disgusting", "Rotten Core", "Filth", "Scum", "Reject", "Vile"],
      description: "Oscuro, denso y repugnante. Beatdown lento para romper huesos."
    },
    {
      title: "MORAL DECAY",
      year: 2025,
      cover: moralDecayCover,
      tracks: ["Moral Decay", "Society's Collapse", "False Idols", "The End", "Final Judgment"],
      description: "Nuestra obra maestra más reciente. La decadencia total de la humanidad hecha música."
    }
  ];

  return (
    <section className="min-h-screen py-32 px-4 bg-neutral-900">
      <div className="container mx-auto max-w-6xl">
        
        {/* Título de la Sección */}
        <div className="flex items-center justify-center mb-20 animate-fade-in-up">
          <Disc3 className="w-10 h-10 md:w-14 md:h-14 text-red-600 mr-4 animate-pulse" />
          <h2 className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'Impact, sans-serif' }}>
            DISCOGRAFÍA
          </h2>
          <Disc3 className="w-10 h-10 md:w-14 md:h-14 text-red-600 ml-4 animate-pulse" />
        </div>

        <div className="space-y-16">
          {albums.map((album, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border-l-4 border-red-900 hover:border-red-600 transition-all duration-500 group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="grid md:grid-cols-12 gap-0">
                
                {/* Columna de la Portada (Izquierda) */}
                <div className="md:col-span-4 relative overflow-hidden h-80 md:h-auto">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Overlay al hacer hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Play className="w-20 h-20 text-red-600 fill-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transform scale-90 group-hover:scale-110 transition-transform duration-300 cursor-pointer" />
                  </div>
                </div>

                {/* Columna de Información (Derecha) */}
                <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-between relative">
                  
                  {/* Fondo decorativo sutil */}
                  <Skull className="absolute right-4 top-4 w-64 h-64 text-red-900/5 rotate-[-20deg] pointer-events-none" />

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4 relative z-10">
                      <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                        {album.title}
                      </h3>
                      <span className="px-3 py-1 bg-red-900/30 border border-red-900 text-red-500 font-bold text-lg rounded-sm">
                        {album.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-8 text-lg font-medium leading-relaxed border-b border-gray-800 pb-6">
                      {album.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-red-600 font-bold text-sm tracking-[0.2em] mb-4 flex items-center gap-2 uppercase">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div> 
                      Lista de Canciones
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {album.tracks.map((track, trackIndex) => (
                        <div
                          key={trackIndex}
                          className="flex items-center gap-4 text-gray-500 hover:text-white transition-colors group/track cursor-pointer border-b border-gray-800/50 pb-2 hover:border-red-600/50"
                        >
                          <span className="text-red-900 font-black text-lg w-6 group-hover/track:text-red-600 transition-colors">
                            {String(trackIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="font-medium text-sm md:text-base tracking-wide uppercase truncate">
                            {track}
                          </span>
                          <Play className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover/track:opacity-100 group-hover/track:translate-x-0 transition-all text-red-600 fill-red-600" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}