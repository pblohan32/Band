import { Skull } from 'lucide-react';

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
      image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Pablo",
      role: "Guitarra",
      bio: "Riffs que cortan como cuchillas. Precisión brutal en cada nota.",
      image: "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Nicolás",
      role: "Voz grave",
      bio: "El muro de sonido. Groove pesado sin piedad.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Buitrago",
      role: "Bajo",
      bio: "Líneas de bajo que sacuden los cimientos. Potencia pura.",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Coco",
      role: "Batería",
      bio: "el calaca",
      image: "https://images.pexels.com/photos/1481308/pexels-photo-1481308.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-16">
          <Skull className="w-12 h-12 text-red-600 mr-4" />
          <h2 className="text-5xl md:text-6xl font-black text-red-600" style={{ fontFamily: 'Impact, sans-serif' }}>
            INTEGRANTES
          </h2>
          <Skull className="w-12 h-12 text-red-600 ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur border-2 border-gray-800 hover:border-red-600 transition-all group overflow-hidden"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-bold text-lg">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
