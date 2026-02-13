import { Image as ImageIcon, Video, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useRef } from 'react';

// --- INTERFACES ---
interface MediaItem {
  type: 'image' | 'video';
  url: string;      // URL de la imagen o del embed de video
  thumbnail?: string; // Solo para videos: la portada antes de dar play
  title: string;
}

interface GallerySection {
  title: string;
  items: MediaItem[];
}

export default function Gallery() {
  // Estado para el modal
  const [selectedSection, setSelectedSection] = useState<MediaItem[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // --- DATA ORGANIZADA POR SECCIONES ---
  const galleryData: GallerySection[] = [

    {
      title: "INTERNATIONAL ASSAULT (QUITOFEST)",
      items: [
        { type: 'image', title: 'Destruyendo Quito', url: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { type: 'image', title: 'Moshpit Internacional', url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { type: 'image', title: 'Backstage', url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { type: 'image', title: 'La Banda', url: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ]
    },
    {
      title: "LIVE CHAOS (MEDELLÍN)",
      items: [
        { type: 'image', title: 'Altavoz Fest', url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { type: 'image', title: 'Teatro Matacandelas', url: 'https://images.pexels.com/photos/1134406/pexels-photo-1134406.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { type: 'image', title: 'Pogo Masivo', url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800' },
      ]
    }
  ];

  // --- FUNCIONES DE NAVEGACIÓN DEL MODAL ---
  const openModal = (sectionItems: MediaItem[], index: number) => {
    setSelectedSection(sectionItems);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedSection(null);
    setCurrentIndex(null);
  };

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedSection && currentIndex !== null) {
      // Si llegamos al final, volvemos al principio (Loop)
      setCurrentIndex((prev) => (prev === selectedSection.length - 1 ? 0 : prev! + 1));
    }
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedSection && currentIndex !== null) {
      // Si estamos al principio, vamos al final
      setCurrentIndex((prev) => (prev === 0 ? selectedSection.length - 1 : prev! - 1));
    }
  };

  // Helper para renderizar el item actual en el modal
  const currentItem = selectedSection && currentIndex !== null ? selectedSection[currentIndex] : null;

  return (
    <section className="min-h-screen py-32 px-0 bg-black overflow-hidden relative">
      
      {/* Fondo Ruido */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
           style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        
        {/* ENCABEZADO */}
        <div className="flex items-center justify-center mb-16">
          <ImageIcon className="w-10 h-10 md:w-12 md:h-12 text-red-600 mr-4" />
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
            GALERÍA <span className="text-red-600">BRUTAL</span>
          </h2>
          <Video className="w-10 h-10 md:w-12 md:h-12 text-red-600 ml-4" />
        </div>

        {/* --- MAPEO DE SECCIONES (AQUÍ ESTÁ LA MAGIA DEL SCROLL) --- */}
        <div className="space-y-16">
          {galleryData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-fade-in-up">
              
              {/* Título de la Sección */}
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4 uppercase tracking-wider flex items-center gap-2">
                {section.title}
                {section.title.includes("VIDEO") && <Video className="w-6 h-6 text-red-600 animate-pulse" />}
              </h3>

              {/* Contenedor de Scroll Horizontal */}
              {/* 'overflow-x-auto' permite el scroll lateral */}
              {/* 'snap-x' hace que las fotos se detengan alineadas */}
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-neutral-900">
                
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex-none w-80 md:w-96 snap-center group cursor-pointer relative aspect-video bg-neutral-900 border-2 border-neutral-800 hover:border-red-600 transition-all duration-300 overflow-hidden shadow-lg"
                    onClick={() => openModal(section.items, itemIndex)}
                  >
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.url}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                    {/* Ícono de Play si es video */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600/80 rounded-full p-4 backdrop-blur-sm group-hover:bg-red-600 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Título de la foto */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <p className="text-white font-black text-lg uppercase tracking-wide drop-shadow-md leading-none">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (LIGHTBOX) --- */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Botón Cerrar */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-red-600 transition-colors z-50"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Botón Anterior */}
          <button 
            onClick={prevMedia}
            className="absolute left-4 md:left-8 text-white hover:text-red-600 transition-transform hover:scale-110 z-50 bg-black/50 p-2 rounded-full hidden md:block"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Contenido Principal */}
          <div 
            className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Evita cerrar si clickeas dentro
          >
            <div className="relative w-full aspect-video bg-black border border-neutral-800 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
              {currentItem.type === 'image' ? (
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={`${currentItem.url}?autoplay=1`} // Autoplay al abrir
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={currentItem.title}
                ></iframe>
              )}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-white mt-6 uppercase tracking-widest text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
              {currentItem.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {currentIndex! + 1} / {selectedSection!.length}
            </p>
          </div>

          {/* Botón Siguiente */}
          <button 
            onClick={nextMedia}
            className="absolute right-4 md:right-8 text-white hover:text-red-600 transition-transform hover:scale-110 z-50 bg-black/50 p-2 rounded-full hidden md:block"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}