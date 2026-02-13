import { Skull } from 'lucide-react';

// --- ZONA DE IMPORTACIÓN DE ARSENAL ---
import potterImg from '../fotos/potter.png';
import pabloImg from '../fotos/pablo.png';
import nicoImg from '../fotos/nico.png';
import buitraImg from '../fotos/buitra.png';
import cocoImg from '../fotos/coco.png';

// ⚠️ CUIDADO AQUÍ: Si esta línea falla, la comento para que la app no explote.
// Descoméntala (quita las //) SOLO cuando estés seguro del nombre del archivo.
 import fondoImg from '../fotos/pngnegro.png'; .

interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function Members() {
  const members: Member[] = [
    {
      name: "Potter",
      role: "Voz raspada",
      bio: "La voz del caos. 15 años destruyendo cuerdas vocales.",
      image: potterImg 
    },
    {
      name: "Pablo",
      role: "Guitarra",
      bio: "Riffs que cortan como cuchillas. Precisión brutal en cada nota.",
      image: pabloImg
    },
    {
      name: "Nicolás",
      role: "Voz grave",
      bio: "El muro de sonido. Groove pesado sin piedad.",
      image: nicoImg
    },
    {
      name: "Buitrago",
      role: "Bajo",
      bio: "Líneas de bajo que sacuden los cimientos. Potencia pura.",
      image: buitraImg
    },
    {
      name: "Coco",
      role: "Batería",
      bio: "El calaca. Ritmos que rompen huesos.",
      image: cocoImg
    }
  ];

  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden bg-neutral-900">
      
      {/* --- FONDO HARDCORE --- */}
      {/* Si logras arreglar la imagen, descomenta la línea de import arriba y cambia 'null' por 'fondoImg' abajo en url() */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          // backgroundImage: `url(${fondoImg})`, // <--- USAR ESTO CUANDO ARREGLES EL ARCHIVO
          backgroundImage: 'linear-gradient(to bottom, #000000, #1a1a1a)', // MIENTRAS TANTO, UN DEGRADADO OSCURO
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-16">
          <Skull className="w-12 h-12 text-red-600 mr-4 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black text-red-600 tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]" style={{ fontFamily: 'Impact, sans-serif' }}>
            INTEGRANTES
          </h2>
          <Skull className="w-12 h-12 text-red-600 ml-4 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-900/60 backdrop-blur-sm border-2 border-neutral-800 hover:border-red-600 transition-all duration-300 group overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
            >
              <div className="relative overflow-hidden h-96">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-black text-white mb-0 italic tracking-wide uppercase shadow-black drop-shadow-md" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-bold text-lg tracking-widest drop-shadow-md">{member.role}</p>
                </div>
              </div>
              <div className="p-6 border-t border-neutral-800 bg-black/40">
                <p className="text-gray-300 leading-relaxed font-medium">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}