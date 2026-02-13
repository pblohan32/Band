import { Disc3, Play, Square, Skull, Volume2 } from 'lucide-react';
import { useState, useRef } from 'react';

// --- IMÁGENES ---
import interiorCover from '../fotos/interior.png';
import holocaustCover from '../fotos/holocaust.png';
import disgustingCover from '../fotos/disgusting.png';
import moralDecayCover from '../fotos/moral_decay.png';

// --- AUDIOS (Asegúrate de tener estos archivos o comenta estas líneas si aún no existen) ---
// 👇 Crea la carpeta 'audios' y mete tus mp3 ahí
import interiorAudio from '../audios/interior.mp3';
import holocaustAudio from '../audios/distopia.mp3';
import disgustingAudio from '../audios/disgusting.mp3';
import moralDecayAudio from '../audios/rigor.mp3';

interface Album {
  id: string; // Identificador único para saber cuál suena
  title: string;
  year: number;
  cover: string;
  tracks: string[];
  description: string;
  audioSrc: string; // La fuente del audio
}

export default function Albums() {
  // Estado para saber cuál álbum está sonando
  const [playingAlbumId, setPlayingAlbumId] = useState<string | null>(null);
  
  // Referencia al reproductor de audio HTML (no visible)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const albums: Album[] = [
    {
      id: 'interior',
      title: "EN MI INTERIOR",
      year: 2018,
      cover: interiorCover,
      audioSrc: interiorAudio, // 👇 Aquí asignamos el audio importado
      tracks: ["En Mi Interior", "Injusticia", "Puño de sangre"],
      description: "Yo siempre estaréadelante, no me dejaré pisotear, mis sentimientos me confunden, no me dejaré ganar"
    },
    {
      id: 'distopia',
      title: "HOLOCAUST",
      year: 2022,
      cover: holocaustCover,
      audioSrc: holocaustAudio,
      tracks: ["Distopía", "Opresor", "Odio", "Rencor"],
      description: "Fuerte y combatiente hasta perder los dientes, en la batalla y firme hasta la muerte."
    },
    {
      id: 'disgusting',
      title: "DISGUSTING",
      year: 2023,
      cover: disgustingCover,
      audioSrc: disgustingAudio,
      tracks: ["Disgusting", "Rotten Core", "Filth", "Scum", "Reject", "Vile"],
      description: "Ansias de sangre, frío en los huesos, contra la muerte sin miedo y de frente."
    },
    {
      id: 'rigor',
      title: "MORAL DECAY",
      year: 2025,
      cover: moralDecayCover,
      audioSrc: moralDecayAudio,
      tracks: ["Moral Decay", "Society's Collapse", "False Idols", "The End", "Final Judgment"],
      description: "Pierdo el control, no hay salida, viene por mi a donde voy."
    }
  ];

  // --- FUNCIÓN MAESTRA DE REPRODUCCIÓN ---
  const togglePlay = (album: Album) => {
    // 1. Si ya hay un audio sonando...
    if (audioRef.current) {
      // Si le dimos click al MISMO álbum que suena, lo pausamos.
      if (playingAlbumId === album.id) {
        audioRef.current.pause();
        setPlayingAlbumId(null); // Nada suena
        return;
      }
      // Si es OTRO álbum, pausamos el anterior primero.
      audioRef.current.pause();
    }

    // 2. Cargamos el nuevo audio
    const newAudio = new Audio(album.audioSrc);
    newAudio.volume = 0.6; // Volumen al 60% para no reventar oídos de golpe
    
    // Cuando termine la canción, reseteamos el estado
    newAudio.onended = () => setPlayingAlbumId(null);
    
    // 3. Reproducimos y guardamos la referencia
    newAudio.play().catch(error => console.log("Error al reproducir:", error));
    audioRef.current = newAudio;
    setPlayingAlbumId(album.id);
  };

  return (
    <section className="min-h-screen py-32 px-4 bg-neutral-900">
      <div className="container mx-auto max-w-5xl">
        
        {/* Título */}
        <div className="flex items-center justify-center mb-20 animate-fade-in-up">
          <Disc3 className="w-10 h-10 md:w-14 md:h-14 text-red-600 mr-4 animate-pulse" />
          <h2 className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'Impact, sans-serif' }}>
            DISCOGRAFÍA
          </h2>
          <Disc3 className="w-10 h-10 md:w-14 md:h-14 text-red-600 ml-4 animate-pulse" />
        </div>

        <div className="space-y-12">
          {albums.map((album, index) => {
            const isPlaying = playingAlbumId === album.id;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row bg-black/40 backdrop-blur-sm border-l-4 transition-all duration-500 group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                  ${isPlaying ? 'border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)]' : 'border-red-900 hover:border-red-600'}
                `}
              >
                
                {/* --- ZONA DE PORTADA (Click para reproducir) --- */}
                <div 
                  className="md:w-72 md:shrink-0 relative h-72 md:h-auto border-b md:border-b-0 md:border-r border-red-900/30 cursor-pointer"
                  onClick={() => togglePlay(album)}
                >
                  <img
                    src={album.cover}
                    alt={album.title}
                    className={`w-full h-full object-cover transition-all duration-700
                      ${isPlaying ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0'}
                    `}
                  />
                  
                  {/* Overlay del Botón Play/Pause */}
                  {/* Si está sonando, el overlay se queda visible (bg-black/40). Si no, solo en hover. */}
                  <div className={`absolute inset-0 flex items-center justify-center backdrop-blur-[2px] transition-all duration-300
                    ${isPlaying ? 'bg-black/40 opacity-100' : 'bg-black/60 opacity-0 group-hover:opacity-100'}
                  `}>
                    {isPlaying ? (
                      // Ícono de PAUSA o STOP cuando suena
                      <div className="relative animate-pulse">
                         <div className="absolute inset-0 bg-red-600 blur-xl opacity-50 rounded-full"></div>
                         <Square className="relative w-16 h-16 text-red-600 fill-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,1)] transform hover:scale-110 transition-transform" />
                      </div>
                    ) : (
                      // Ícono de PLAY cuando está quieto
                      <Play className="w-16 h-16 text-red-600 fill-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transform scale-90 group-hover:scale-110 transition-transform" />
                    )}
                  </div>

                  {/* Etiqueta "ESCUCHAR AHORA" */}
                  <div className={`absolute bottom-4 left-0 right-0 text-center transition-opacity duration-300
                     ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}>
                    <span className="text-white bg-red-600 px-3 py-1 text-xs font-black tracking-widest uppercase">
                      {isPlaying ? 'DETENER RUIDO' : 'PREVIEW TRACK'}
                    </span>
                  </div>
                </div>

                {/* --- ZONA DE INFORMACIÓN --- */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative">
                  <Skull className="absolute right-4 top-4 w-48 h-48 text-red-900/5 rotate-[-20deg] pointer-events-none" />

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4 relative z-10">
                      <h3 
                        className="text-4xl md:text-5xl font-black text-white italic tracking-widest uppercase transition-colors duration-300" 
                        style={{ 
                          fontFamily: 'Impact, sans-serif',
                          WebkitTextStroke: '1px #dc2626',
                          textShadow: '2px 2px 0px #000',
                          color: isPlaying ? '#fff' : 'transparent' // Efecto visual: si suena, se rellena de blanco
                        }}
                      >
                        {album.title}
                      </h3>
                      
                      {/* Indicador de "REPRODUCIENDO" */}
                      {isPlaying && (
                         <span className="flex items-center gap-2 text-red-500 font-bold animate-pulse">
                           <Volume2 className="w-5 h-5" /> REPRODUCIENDO
                         </span>
                      )}
                    </div>
                    
                    <p className="text-gray-400 mb-6 text-lg font-medium leading-relaxed border-b border-gray-800 pb-4">
                      {album.description}
                    </p>
                  </div>

                  {/* Lista de tracks (Sin cambios funcionales, solo visuales) */}
                  <div className="relative z-10">
                    <h4 className="text-red-600 font-bold text-sm tracking-[0.2em] mb-3 flex items-center gap-2 uppercase">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div> 
                      Lista de Canciones
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {album.tracks.map((track, trackIndex) => (
                        <div key={trackIndex} className="flex items-center gap-3 text-gray-500 border-b border-gray-800/50 pb-1">
                          <span className="text-red-900 font-black text-lg w-6">
                            {String(trackIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="font-medium text-sm tracking-wide uppercase truncate">
                            {track}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}