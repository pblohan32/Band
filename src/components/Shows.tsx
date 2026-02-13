import { Calendar, MapPin, ArrowRight, Instagram, Globe, Music2, Camera } from 'lucide-react';

// 👇 IMPORTANTE: Usa la mejor foto en vivo que tengas para el Quitofest
import quitoImage from '../fotos/potter2.png'; 

// 1. Definimos la interface para recibir la función de navegación
interface ShowsProps {
  setActiveSection: (section: string) => void;
}

// 2. Recibimos la prop en la función principal
export default function Shows({ setActiveSection }: ShowsProps) {
  
  const highlightShow = {
    city: "QUITO, ECUADOR",
    venue: "QUITOFEST 2025",
    date: "25 OCT 2025",
    image: quitoImage,
    description: "Representando el hardcore de Medellín en el festival más grande de Ecuador.",
    bands: ["Mugre Sur", "Madbrain", "Total Death", "Road to Hell", "Infecto Devorante", "Withblood", "Gualgura", "Retaque", "Consumidor Final"]
  };

  const gigHistory = [
    { date: "25 ENE 2026", venue: "Tao Part Fest", city: "Medellín", bands: [] },
    { date: "23 AGO 2025", venue: "Stoffest", city: "Medellín", bands: [] },
    { date: "19 JUL 2025", venue: "Nororientalfest", city: "Medellín", bands: [] },
    { date: "20 SEP 2024", venue: "Nororientalfest", city: "Medellín", bands: [] },
    { date: "18 AGO 2024", venue: "Ruido y Solidaridad", city: "Medellín", bands: ["Alta Agresión", "Pelea o Muere", "Krujido", "Miserable", "Infecto", "Anti-todo", "Katabaxis", "Hartxs"] },
    { date: "20 MAY 2024", venue: "Audiciones Altavoz", city: "Medellín", bands: [] },
    { date: "26 MAR 2024", venue: "Baile y Mosh", city: "Bogotá", bands: ["Inmemorial", "Road to Hell", "Spitout", "Días de Agresión", "The Last Opportunity"] },
    { date: "25 ENE 2024", venue: "Streetdown", city: "Medellín", bands: [] },
    { date: "19 MAR 2023", venue: "Rehen: 19 Años", city: "Bogotá", bands: ["Rehen", "Pelea o Muere", "A Call For Revenge", "Road to Hell", "Enemy.906", "Alta Agresión"] },
  ];

  return (
    <section className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      
      {/* --- FONDO CON TEXTURA --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"></div>
      
      {/* Ruido visual */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* TÍTULO */}
        <div className="flex items-center justify-center mb-16 animate-fade-in-up">
          <Globe className="w-10 h-10 md:w-12 md:h-12 text-red-600 mr-4 animate-spin-slow" />
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase drop-shadow-[0_4px_4px_rgba(220,38,38,0.5)]" style={{ fontFamily: 'Impact, sans-serif' }}>
            HISTORIAL DE <span className="text-red-600">GUERRA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* --- COLUMNA IZQUIERDA: QUITOFEST (Highlight & Link a Galería) --- */}
          {/* 👇 AQUI ESTÁ LA MAGIA: onClick y cursor-pointer */}
          <div 
            className="lg:col-span-7 group relative h-fit sticky top-8 cursor-pointer"
            onClick={() => setActiveSection('gallery')} // Al hacer click, lleva a galería
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-neutral-900 border-2 border-neutral-800 overflow-hidden flex flex-col shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
              
              {/* Imagen Grande */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={highlightShow.image} 
                  alt="Quitofest Show" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Badge Internacional */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 text-sm font-black tracking-widest uppercase shadow-lg transform -skew-x-12 z-20">
                  INTERNATIONAL ASSAULT
                </div>

                {/* 👇 NUEVO: Overlay "VER GALERÍA" al pasar el mouse */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 backdrop-blur-[2px]">
                   <div className="flex flex-col items-center animate-bounce-slow">
                     <Camera className="w-16 h-16 text-white mb-2 drop-shadow-lg" />
                     <span className="text-white font-black text-2xl uppercase tracking-widest bg-red-600 px-4 py-1 transform -skew-x-12 shadow-lg">
                       VER FOTOS DEL EVENTO
                     </span>
                   </div>
                </div>
                
                {/* Overlay Gradiente Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent pointer-events-none"></div>
                
                {/* Info sobre la imagen */}
                <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                   <h3 className="text-5xl md:text-7xl font-black text-white mb-2 leading-none uppercase drop-shadow-md" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {highlightShow.venue}
                  </h3>
                   <div className="flex items-center gap-3 text-red-500 font-bold text-xl">
                    <MapPin className="w-6 h-6" />
                    <span className="tracking-widest uppercase">{highlightShow.city}</span>
                  </div>
                </div>
              </div>

              {/* Bandas y Detalles */}
              <div className="p-8 border-t border-red-900/50 bg-black/80 backdrop-blur-md">
                <div className="flex items-center gap-2 text-gray-400 font-bold mb-4 uppercase tracking-widest text-sm">
                  <Calendar className="w-4 h-4 text-red-600" /> {highlightShow.date}
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {highlightShow.description}
                </p>

                {/* Lista de Bandas del Quitofest */}
                <div className="bg-red-950/20 p-4 border border-red-900/30 rounded-sm">
                   <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                     <Music2 className="w-4 h-4" /> Line Up Brutal:
                   </h4>
                   <div className="flex flex-wrap gap-2">
                      {highlightShow.bands.map((band, i) => (
                        <span key={i} className="text-xs md:text-sm font-bold text-gray-400 border border-gray-700 px-2 py-1 uppercase bg-black hover:text-white hover:border-red-600 cursor-default transition-colors">
                          {band}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: LISTA DE SHOWS CON SCROLL --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contenedor Scrollable */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 flex flex-col max-h-[600px] lg:max-h-[700px]">
              
              <div className="p-6 border-b border-neutral-800 bg-black/60 sticky top-0 z-20 backdrop-blur-md">
                <h4 className="text-2xl font-black text-white flex items-center gap-2 uppercase italic">
                  <Calendar className="text-red-600" /> Archivo de Gigs
                </h4>
              </div>
              
              {/* Lista Scrollable */}
              <div className="overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {gigHistory.map((show, idx) => (
                  <div key={idx} className="bg-black/40 p-5 border-l-4 border-neutral-700 hover:border-red-600 transition-all group/item hover:bg-neutral-900/80">
                    
                    <div className="flex justify-between items-start mb-2">
                       <div>
                          <h5 className="text-white font-bold text-xl uppercase tracking-wide leading-tight group-hover/item:text-red-500 transition-colors">
                            {show.venue}
                          </h5>
                          <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase mt-1">
                            <MapPin className="w-3 h-3" /> {show.city}
                          </div>
                       </div>
                       <span className="bg-neutral-800 text-gray-300 text-xs font-bold px-2 py-1 rounded border border-gray-700 whitespace-nowrap">
                         {show.date}
                       </span>
                    </div>

                    {show.bands.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-800">
                        <p className="text-[10px] text-red-600 font-bold uppercase mb-1">Con:</p>
                        <p className="text-xs text-gray-400 leading-snug">
                          {show.bands.join(" · ").toUpperCase()}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* --- CARD DE CONTACTO --- */}
            <div className="bg-red-900/10 border-2 border-red-900/50 p-8 flex flex-col items-center text-center relative overflow-hidden group hover:bg-red-900/20 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.1)]">
              
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              
              <h4 className="text-3xl font-black text-white mb-2 uppercase z-10" style={{ fontFamily: 'Impact, sans-serif' }}>
                ¿QUIERES BOOKEARNOS?
              </h4>
              <p className="text-gray-400 mb-6 z-10 text-sm font-medium">
                Llevamos el caos a tu ciudad. Escribe ahora.
              </p>
              
              <a 
                href="https://www.instagram.com/roadtohell_hardcore/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="z-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-black tracking-widest uppercase transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] clip-path-polygon"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
              >
                <Instagram className="w-5 h-5" />
                ESCRIBIR AL DM
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}