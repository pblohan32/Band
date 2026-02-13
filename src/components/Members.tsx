import { Skull } from 'lucide-react';

// --- ZONA DE IMPORTACIÓN DE ARSENAL ---
// Ajusta la ruta '../fotos/' si tu archivo está en otro nivel de carpetas.
// OJO: Asegúrate si son .png o .jpg. Aquí puse .png como me dijiste.
import potterImg from '../fotos/potter.png';
import pabloImg from '../fotos/pablo.png';
import nicoImg from '../fotos/nico.png';
import buitraImg from '../fotos/buitra.png';
import cocoImg from '../fotos/coco.png';

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
      image: potterImg // Aquí va la variable importada, sin comillas
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
    <section className="min-h-screen py-32 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-16">
          <Skull className="w-12 h-12 text-red-600 mr-4 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black text-red-600 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" style={{ fontFamily: 'Impact, sans-serif' }}>
            INTEGRANTES
          </h2>
          <Skull className="w-12 h-12 text-red-600 ml-4 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-900/80 backdrop-blur border-2 border-neutral-800 hover:border-red-600 transition-all duration-300 group overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              <div className="relative overflow-hidden h-96"> {/* Aumenté un poco la altura para más impacto */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 group-hover:scale-110"
                />
                {/* Degradado más agresivo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-black text-white mb-0 italic tracking-wide uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-bold text-lg tracking-widest">{member.role}</p>
                </div>
              </div>
              <div className="p-6 border-t border-neutral-800">
                <p className="text-gray-400 leading-relaxed font-medium">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}