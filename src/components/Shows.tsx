import { Calendar, MapPin, ArrowRight, Instagram, Globe } from 'lucide-react';

// Si tienes una foto específica del show en Ecuador, impórtala aquí.
// Si no, usa una de las fotos de la banda en vivo.
import showImage from '../fotos/potter.png'; // 👈 CAMBIA ESTO POR UNA FOTO EN VIVO SI TIENES

export default function Shows() {
  
  // Lista de eventos (Puedes mezclar pasados épicos y futuros)
  const pastEvents = [
    {
      city: "QUITO, ECUADOR",
      venue: "Festival Internacional",
      date: "NOV 2025", // Fecha del destacado
      image: showImage,
      description: "Destrucción total en territorio internacional. Representando el beatdown de Medallo."
    }
  ];

  const upcomingShows = [
    { day: "15", month: "MAR", city: "MEDELLÍN", venue: "Teatro Matacandelas", status: "CONFIRMADO" },
    { day: "02", month: "ABR", city: "BOGOTÁ", venue: "Ace of Spades", status: "POR ANUNCIAR" },
    { day: "20", month: "MAY", city: "CALI", venue: "Distrito Unicentro", status: "PENDIENTE" },
  ];

  return (
    <section className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      
      {/* --- FONDO CON TEXTURA --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        
        {/* TÍTULO */}
        <div className="flex items-center justify-center mb-16 animate-fade-in-up">
          <Globe className="w-10 h-10 md:w-12 md:h-12 text-red-600 mr-4 animate-spin-slow" />
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase drop-shadow-[0_4px_4px_rgba(220,38,38,0.5)]" style={{ fontFamily: 'Impact, sans-serif' }}>
            TOUR <span className="text-red-600">&</span> FECHAS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* --- COLUMNA IZQUIERDA: EL DESTACADO (ECUADOR) --- */}
          {/* Ya no dice "Próximo", ahora es un "Highlight" de la banda */}
          <div className="lg:col-span-7 group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-neutral-900 border-2 border-neutral-800 overflow-hidden flex flex-col">
              
              {/* Imagen Grande */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={pastEvents[0].image} 
                  alt="Ecuador Show" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Badge de "DESTACADO" */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 text-sm font-black tracking-widest uppercase shadow-lg transform -skew-x-12">
                  INTERNATIONAL ASSAULT
                </div>
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
              </div>

              {/* Info del Destacado */}
              <div className="p-8 flex-1 flex flex-col justify-end">
                <div className="flex items-center gap-3 text-red-500 font-bold mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="tracking-widest">{pastEvents[0].date}</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-4 leading-none uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {pastEvents[0].city}
                </h3>
                
                <p className="text-gray-400 text-lg mb-6 border-l-2 border-red-600 pl-4">
                  {pastEvents[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: PRÓXIMAS FECHAS + CONTACTO --- */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Lista de Próximos Shows */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6">
              <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-2 uppercase italic">
                <MapPin className="text-red-600" /> Próximas Masacres
              </h4>
              
              <div className="space-y-4">
                {upcomingShows.map((show, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-black/40 p-4 border-l-2 border-transparent hover:border-red-600 transition-all group/item">
                    {/* Fecha */}
                    <div className="bg-neutral-800 p-2 text-center min-w-[70px] group-hover/item:bg-red-900/20 transition-colors">
                      <span className="block text-2xl font-black text-white leading-none">{show.day}</span>
                      <span className="block text-xs font-bold text-red-500 uppercase">{show.month}</span>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h5 className="text-white font-bold uppercase tracking-wide">{show.city}</h5>
                      <p className="text-gray-500 text-xs uppercase">{show.venue}</p>
                    </div>

                    {/* Status */}
                    <span className="text-[10px] font-bold border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">
                      {show.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CARD DE CONTACTO (Instagram) --- */}
            <div className="bg-red-900/10 border-2 border-red-900/50 p-8 flex flex-col items-center text-center relative overflow-hidden group hover:bg-red-900/20 transition-colors">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              
              <h4 className="text-3xl font-black text-white mb-2 uppercase z-10" style={{ fontFamily: 'Impact, sans-serif' }}>
                ¿QUIERES BOOKEARNOS?
              </h4>
              <p className="text-gray-400 mb-6 z-10 text-sm">
                Llevamos el caos a tu ciudad. Escribe ahora.
              </p>
              
              <a 
                href="https://www.instagram.com/roadtohell_hardcore/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="z-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold tracking-widest uppercase transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] clip-path-polygon"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }} // Forma agresiva inclinada
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