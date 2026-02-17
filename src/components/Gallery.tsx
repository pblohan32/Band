import { Image as ImageIcon, Video, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

// 👇 IMPORTACIÓN DE FOTOS LOCALES
// Asegúrate de que las rutas y extensiones (.png, .jpg) sean exactas
import quitoImg1 from '../fotos/quito1.png';
import quitoImg2 from '../fotos/quito2.png';
import quitoImg3 from '../fotos/quito3.png';
import quitoImg4 from '../fotos/quito4.png';

import enImg1 from '../fotos/ensayo1.png';
import enImg2 from '../fotos/ensayo2.png';
import enImg3 from '../fotos/ensayo3.png';
import enImg4 from '../fotos/ensayo4.png';
import enImg5 from '../fotos/ensayo5.png';
import enImg6 from '../fotos/ensayo6.png';
import enImg7 from '../fotos/ensayo7.png';
import enImg8 from '../fotos/ensayo8.png';
import enImg9 from '../fotos/ensayo9.png';
import enImg10 from '../fotos/ensayo10.png';
import enImg11 from '../fotos/ensayo11.png';
import enImg12 from '../fotos/ensayo12.png';
import enImg13 from '../fotos/ensayo13.png';
import enImg14 from '../fotos/ensayo14.png';
import enImg15 from '../fotos/ensayo15.png';

import sdImg1 from '../fotos/sd1_(1).png';
import sdImg2 from '../fotos/sd1_(2).png';
// Nota: Saltaste el 3 en tus imports, así que sigo tu orden
import sdImg4 from '../fotos/sd1_(4).png';
import sdImg5 from '../fotos/sd1_(5).png';

import sd2Img1 from '../fotos/sd2_(1).png';
import sd2Img2 from '../fotos/sd2_(2).png';
import sd2Img3 from '../fotos/sd2_(3).png';
import sd2Img4 from '../fotos/sd2_(4).png';

import sd3Img1 from '../fotos/sd3.png';
import sd3Img2 from '../fotos/sd3(2).png';
import sd3Img3 from '../fotos/sd3(3).png';
import sd3Img4 from '../fotos/sd3(4).png';
import sd3Img5 from '../fotos/sd3(5).png';
import sd3Img6 from '../fotos/sd3(8).png';

import rsImg1 from '../fotos/rs1.png';
import rsImg2 from '../fotos/rs2.png';
import rsImg3 from '../fotos/rs3.png';
import rsImg4 from '../fotos/rs4.png';
import rsImg5 from '../fotos/rs5.png';
import rsImg6 from '../fotos/rs6.png';

import chImg2 from '../ch2.png';
import chImg3 from '../ch3.png';
import chImg4 from '../ch4.png';
import chImg5 from '../ch5.png';
import chImg6 from '../ch6.png';

// --- INTERFACES ---
interface MediaItem {
  type: 'image' | 'video';
  url: string;      
  thumbnail?: string; 
  title: string;
}

interface GallerySection {
  title: string;
  items: MediaItem[];
}

export default function Gallery() {
  const [selectedSection, setSelectedSection] = useState<MediaItem[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // --- DATA ORGANIZADA POR SECCIONES ---
  const galleryData: GallerySection[] = [
    {
      title: "INTERNATIONAL ASSAULT (QUITOFEST)",
      items: [
        { type: 'image', title: '1', url: quitoImg1 },
        { type: 'image', title: '2', url: quitoImg2 },
        { type: 'image', title: '3', url: quitoImg3 },
        { type: 'image', title: '4', url: quitoImg4 },
      ]
    },
    {
      title: "ENSAYOS",
      items: [
        { type: 'image', title: '1', url: enImg1 },
        { type: 'image', title: '2', url: enImg2 },
        { type: 'image', title: '3', url: enImg3 },
        { type: 'image', title: '4', url: enImg4 },
        { type: 'image', title: '5', url: enImg5 },
        { type: 'image', title: '6', url: enImg6 },
        { type: 'image', title: '7', url: enImg7 },
        { type: 'image', title: '8', url: enImg8 },
        { type: 'image', title: '9', url: enImg9 },
        { type: 'image', title: '10', url: enImg10 },
        { type: 'image', title: '11', url: enImg11 },
        { type: 'image', title: '12', url: enImg12 },
        { type: 'image', title: '13', url: enImg13 },
        { type: 'image', title: '14', url: enImg14 },
        { type: 'image', title: '15', url: enImg15 },
      ]
    },

    {
      title: "Streetdown 2022",
      items: [
        { type: 'image', title: '1', url: sd2Img1 },
        { type: 'image', title: '2', url: sd2Img2 }, // 👈 CORREGIDO (antes decía sdI2mg2)
        { type: 'image', title: '3', url: sd2Img3 }, // 👈 CORREGIDO (antes decía sdI2mg3)
        { type: 'image', title: '4', url: sd2Img4 }, // 👈 CORREGIDO (antes decía sdI2mg4)
      ]
    },

    {
      title: "Streetdown 2024",
      items: [
        { type: 'image', title: '1', url: sd3Img1 },
        { type: 'image', title: '2', url: sd3Img2 }, 
        { type: 'image', title: '3', url: sd3Img3 }, 
        { type: 'image', title: '4', url: sd3Img4 }, 
        { type: 'image', title: '3', url: sd3Img5 }, 
        { type: 'image', title: '4', url: sd3Img6 }, 
      ]
    },

        {  title: "Streetdown 2025",
      items: [
        { type: 'image', title: '1', url: sdImg1 },
        { type: 'image', title: '2', url: sdImg2 },
        { type: 'image', title: '3', url: sdImg4 },
        { type: 'image', title: '4', url: sdImg5 },
      ]
    },

  {  title: "Ruido y solidaridad vol 4",
      items: [
        { type: 'image', title: '1', url: rsImg1 },
        { type: 'image', title: '2', url: rsImg2 },
        { type: 'image', title: '3', url: rsImg3 },
        { type: 'image', title: '4', url: rsImg4 },
        { type: 'image', title: '3', url: rsImg5 },
        { type: 'image', title: '4', url: rsImg6 },
      ]
    },
    
    {  title: "Nosotros",
      items: [
        { type: 'image', title: '1', url: chImg2 },
        { type: 'image', title: '2', url: chImg3 },
        { type: 'image', title: '3', url: chImg4 },
        { type: 'image', title: '4', url: chImg5 },
        { type: 'image', title: '5', url: chImg6 },
      ]
    },
  ];

  // --- FUNCIONES DE NAVEGACIÓN ---
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
      setCurrentIndex((prev) => (prev === selectedSection.length - 1 ? 0 : prev! + 1));
    }
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedSection && currentIndex !== null) {
      setCurrentIndex((prev) => (prev === 0 ? selectedSection.length - 1 : prev! - 1));
    }
  };

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
            ARCHIVO <span className="text-red-600">GALERÍA</span>
          </h2>
          <Video className="w-10 h-10 md:w-12 md:h-12 text-red-600 ml-4" />
        </div>

        {/* --- MAPEO DE SECCIONES --- */}
        <div className="space-y-16">
          {galleryData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-fade-in-up">
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6 border-l-4 border-red-600 pl-4 uppercase tracking-wider flex items-center gap-2">
                {section.title}
                {section.title.includes("VIDEO") && <Video className="w-6 h-6 text-red-600 animate-pulse" />}
              </h3>

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
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600/80 rounded-full p-4 backdrop-blur-sm group-hover:bg-red-600 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

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
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-red-600 transition-colors z-50"
          >
            <X className="w-10 h-10" />
          </button>

          <button 
            onClick={prevMedia}
            className="absolute left-4 md:left-8 text-white hover:text-red-600 transition-transform hover:scale-110 z-50 bg-black/50 p-2 rounded-full hidden md:block"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div 
            className="max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            {currentItem.type === 'image' ? (
              <div className="relative flex justify-center items-center">
                 <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain border border-neutral-800 shadow-[0_0_50px_rgba(220,38,38,0.2)]"
                />
              </div>
            ) : (
              <div className="w-full aspect-video border border-neutral-800 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                <iframe
                  src={`${currentItem.url}?autoplay=1`} 
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={currentItem.title}
                ></iframe>
              </div>
            )}
            
            <h3 className="text-2xl md:text-3xl font-black text-white mt-6 uppercase tracking-widest text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
              {currentItem.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {currentIndex! + 1} / {selectedSection!.length}
            </p>
          </div>

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
