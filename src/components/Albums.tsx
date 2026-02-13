import { Disc3, Play } from 'lucide-react';

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
      title: "BLOOD & CONCRETE",
      year: 2018,
      cover: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      tracks: ["Rage Unleashed", "Concrete Jungle", "No Surrender", "Built to Destroy"],
      description: "El EP que lo empezó todo. Crudo, directo y sin piedad."
    },
    {
      title: "ETERNAL WARFARE",
      year: 2020,
      cover: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800",
      tracks: ["War Machine", "Burn It Down", "Iron Fist", "Dead End", "Ruthless", "Final Stand", "Chaos Born", "No Escape", "Eternal", "Ashes"],
      description: "Nuestro primer álbum completo. 10 tracks de pura destrucción."
    },
    {
      title: "ASHES OF TOMORROW",
      year: 2023,
      cover: "https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg?auto=compress&cs=tinysrgb&w=800",
      tracks: ["Dystopia", "Broken System", "Rise or Fall", "Darkness Calls", "Hollow Victory", "Last Breath", "Shattered Dreams", "No Future"],
      description: "Más oscuro, más técnico, más brutal. Nuestro trabajo más ambicioso."
    }
  ];

  return (
    <section className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-16">
          <Disc3 className="w-12 h-12 text-red-600 mr-4" />
          <h2 className="text-5xl md:text-6xl font-black text-red-600" style={{ fontFamily: 'Impact, sans-serif' }}>
            DISCOGRAFÍA
          </h2>
          <Disc3 className="w-12 h-12 text-red-600 ml-4" />
        </div>

        <div className="space-y-12">
          {albums.map((album, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur border-2 border-gray-800 hover:border-red-600 transition-all overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="relative group">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full aspect-square object-cover border-4 border-gray-800 group-hover:border-red-600 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-16 h-16 text-red-600" />
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <h3 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: 'Impact, sans-serif' }}>
                        {album.title}
                      </h3>
                      <span className="text-red-600 font-bold text-xl">{album.year}</span>
                    </div>
                    <p className="text-gray-400 mb-6 text-lg">{album.description}</p>
                  </div>

                  <div>
                    <h4 className="text-red-600 font-bold text-lg mb-3">TRACKLIST:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {album.tracks.map((track, trackIndex) => (
                        <div
                          key={trackIndex}
                          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/track cursor-pointer"
                        >
                          <span className="text-red-600 font-bold">{String(trackIndex + 1).padStart(2, '0')}</span>
                          <Play className="w-3 h-3 opacity-0 group-hover/track:opacity-100 transition-opacity" />
                          <span>{track}</span>
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
