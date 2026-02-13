import { Music, Calendar, Disc3 } from 'lucide-react';
import { useState, useEffect } from 'react';
// Asegúrate que la ruta sea correcta. Si 'fondo.jpeg' está en src, usa '../fondo.jpeg' si este archivo está en components.
import heroBg from '../fondo.jpeg';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [badgeAnimate, setBadgeAnimate] = useState(false);

  useEffect(() => {
    setBadgeAnimate(true);
  }, []);

  const badges = [
    { icon: Music, number: '10+', label: 'AÑOS', delay: 0.2, desc: 'DE TRAYECTORIA' },
    { icon: Disc3, number: '4', label: 'ÁLBUMES', delay: 0.4, desc: 'PRODUCCIONES' },
    { icon: Calendar, number: '50+', label: 'SHOWS', delay: 0.6, desc: 'EN VIVO' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      
      {/* --- CAPA 1: IMAGEN DE FONDO --- */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Efecto Parallax simple
        }}
      />

      {/* --- CAPA 2: GRADIENTE DE OSCURIDAD (REDUCIDO) --- */}
      {/* Antes: from-black/85 via-black/90 to-black/95 (Muy oscuro) */}
      {/* Ahora: from-black/40 via-black/60 to-black/90 (Más visible arriba, oscuro abajo) */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

      {/* --- CAPA 3: RUIDO / GRANO (OPCIONAL) --- */}
      {/* Bajé la opacidad de 0.5 a 0.3 para limpiar la imagen */}
      <div className="absolute inset-0 z-1 opacity-30 pointer-events-none" style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3CfeColorMatrix type="saturate" values="0" /%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.5"/%3E%3C/svg%3E')`,
      }}></div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 text-center max-w-6xl w-full">
        {/* Main title */}
        <div className="mb-12">
          <h2
            className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-black mb-6 animate-pulse"
            style={{
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              textShadow: `
                0 0 20px rgba(220, 38, 38, 0.8),
                0 0 40px rgba(220, 38, 38, 0.5),
                4px 4px 0px rgba(0, 0, 0, 1),
                8px 8px 0px rgba(220, 38, 38, 0.3)
              `,
              color: '#dc2626',
              letterSpacing: '-0.03em',
              lineHeight: '0.9',
            }}
          >
            ROAD TO HELL<br />HXC
          </h2>

          {/* Subtitle with style */}
          <div className="space-y-3 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-gray-200 tracking-widest animate-fade-in-up"
              style={{
                fontFamily: "'Arial Black', sans-serif",
                textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
                letterSpacing: '0.05em'
              }}
            >
              HARDCORE DESDE LA COMUNA
            </p>
            <div className="flex justify-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-red-600 to-red-900 self-center"></div>
              <p className="text-lg md:text-xl text-red-500 font-bold tracking-widest drop-shadow-md">NORORIENTAL</p>
              <div className="h-0.5 w-12 bg-gradient-to-l from-red-600 to-red-900 self-center"></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed font-medium animate-fade-in-up drop-shadow-md"
          style={{
            textShadow: '1px 1px 4px rgba(0,0,0,1)', // Sombra negra fuerte al texto para que se lea sobre la foto
            animationDelay: '0.1s'
          }}
        >
          Road to hell es pasión, ruido e inconformismo. La banda moldeada por el caos de Medellín.
          Aquí podrás conocer un poco más de nosotros.
        </p>
        
        {/* Floating Badge Cards */}
        <div className="relative mt-12 mb-12">
          <div className="relative flex items-center justify-center gap-8 md:gap-14 mt-10">
            {badges.map((badge, index) => {
                const Icon = badge.icon;
                const isAnimating = badgeAnimate;
                const isCenter = index === 1;

              return (
                <div
                  key={index}
                  className={`${isAnimating ? 'animate-badge-pop' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${badge.delay}s`,
                  }}
                >
                    <div className="group cursor-default">
                    <div
                      className={`relative flex flex-col items-center justify-center rounded-full bg-black/80 border-2 border-red-900 backdrop-blur-sm
                      ${isCenter 
                        ? 'w-48 h-48 md:w-60 md:h-60 scale-110 z-20' 
                        : 'w-36 h-36 md:w-44 md:h-44 opacity-90'}
                      animate-badge-float transition-all duration-500 group-hover:scale-110`}
                      
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 40px rgba(220, 38, 38, 0.9), inset 0 0 20px rgba(220, 38, 38, 0.3)';
                        e.currentTarget.style.transform = 'scale(1.15)';
                        e.currentTarget.style.borderColor = '#dc2626';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(220, 38, 38, 0.4), inset 0 0 15px rgba(220, 38, 38, 0.05)';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = '#7f1d1d';
                      }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-red-600 mb-1" strokeWidth={1.5} />
                      <div className="text-center">
                        <p className="text-lg md:text-xl font-black text-red-600" style={{ letterSpacing: '-0.02em' }}>
                          {badge.number}
                        </p>
                        <p className="text-xs font-bold text-gray-300" style={{ letterSpacing: '0.05em' }}>
                          {badge.label}
                        </p>
                      </div>
                      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold bg-black/80 px-2 py-1 rounded">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <button
            onClick={() => setActiveSection('bio')}
            className="group relative px-8 py-4 md:py-5 text-white font-black text-base md:text-lg tracking-widest overflow-hidden transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            style={{
              backgroundColor: '#dc2626',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              boxShadow: '0 8px 16px rgba(220, 38, 38, 0.3), inset 0 -2px 0 rgba(0,0,0,0.3)',
              border: '3px solid #991b1b',
            }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            CONOCE LA BANDA
          </button>

          <button
            onClick={() => setActiveSection('albums')}
            className="group relative px-8 py-4 md:py-5 text-red-600 font-black text-base md:text-lg tracking-widest overflow-hidden transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-black/60 backdrop-blur-sm"
            style={{
              backgroundColor: 'transparent', // O un negro semitransparente si el texto se pierde
              border: '3px solid #dc2626',
              boxShadow: '0 0 20px rgba(220, 38, 38, 0.3), inset 0 0 0 rgba(220, 38, 38, 0)',
              textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(220, 38, 38, 0.8), inset 0 0 20px rgba(220, 38, 38, 0.2)';
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(220, 38, 38, 0.3), inset 0 0 0 rgba(220, 38, 38, 0)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            ESCUCHA NUESTRO SONIDO
          </button>
        </div>

        {/* Divider line */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="h-1 flex-1 max-w-xs bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <p className="text-gray-500 text-xs tracking-widest font-bold">SIN CONCESIONES</p>
          <div className="h-1 flex-1 max-w-xs bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}