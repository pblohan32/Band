import { Calendar, MapPin, Ticket } from 'lucide-react';

interface Show {
  date: string;
  venue: string;
  city: string;
  status: 'past' | 'upcoming';
  bands?: string[];
}

export default function Shows() {
  const shows: Show[] = [
    { date: "15 Dic 2024", venue: "Metal Fest Nacional", city: "Ciudad de México", status: "upcoming", bands: ["Chaos Reign", "Iron Blood", "Savage Death"] },
    { date: "8 Nov 2024", venue: "Underground Club", city: "Guadalajara", status: "past" },
    { date: "22 Oct 2024", venue: "Rock Arena", city: "Monterrey", status: "past", bands: ["Chaos Reign", "Toxic Waste"] },
    { date: "30 Sep 2024", venue: "Hardcore Fest", city: "Puebla", status: "past" },
    { date: "14 Ago 2024", venue: "The Pit", city: "Ciudad de México", status: "past" },
    { date: "5 Jul 2024", venue: "Summer Mayhem", city: "Tijuana", status: "past", bands: ["Chaos Reign", "Brutal Force", "Death Grip"] },
    { date: "20 Jun 2024", venue: "Metal Underground", city: "Querétaro", status: "past" },
    { date: "3 May 2024", venue: "Rage Fest", city: "León", status: "past" },
    { date: "15 Abr 2024", venue: "Warehouse 51", city: "Guadalajara", status: "past" },
    { date: "28 Mar 2024", venue: "Chaos Tour 2024", city: "Toluca", status: "past" },
  ];

  const upcomingShows = shows.filter(show => show.status === 'upcoming');
  const pastShows = shows.filter(show => show.status === 'past');

  return (
    <section className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center mb-16">
          <Calendar className="w-12 h-12 text-red-600 mr-4" />
          <h2 className="text-5xl md:text-6xl font-black text-red-600" style={{ fontFamily: 'Impact, sans-serif' }}>
            CONCIERTOS
          </h2>
          <Calendar className="w-12 h-12 text-red-600 ml-4" />
        </div>

        {upcomingShows.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              <Ticket className="w-8 h-8 text-red-600" />
              PRÓXIMOS SHOWS
            </h3>
            <div className="space-y-4">
              {upcomingShows.map((show, index) => (
                <div
                  key={index}
                  className="bg-red-600 border-2 border-red-600 p-6 hover:bg-red-700 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                        <span className="text-2xl font-black text-white">{show.date}</span>
                        <div className="flex items-center gap-2 text-white">
                          <MapPin className="w-5 h-5" />
                          <span className="font-bold">{show.venue} - {show.city}</span>
                        </div>
                      </div>
                      {show.bands && (
                        <p className="text-white/90 text-sm">
                          Con: {show.bands.join(', ')}
                        </p>
                      )}
                    </div>
                    <button className="bg-white text-red-600 font-bold py-3 px-8 hover:bg-gray-100 transition-all group-hover:scale-105 whitespace-nowrap">
                      COMPRAR BOLETOS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-3xl font-black text-white mb-8">SHOWS ANTERIORES</h3>
          <div className="space-y-3">
            {pastShows.map((show, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur border-2 border-gray-800 hover:border-red-600 transition-all p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-xl font-bold text-red-600 md:w-32">{show.date}</span>
                  <div className="flex items-center gap-2 text-gray-300 flex-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{show.venue}</span>
                    <span>-</span>
                    <span>{show.city}</span>
                  </div>
                  {show.bands && (
                    <span className="text-gray-500 text-sm">
                      {show.bands.join(', ')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-black/60 backdrop-blur border-2 border-gray-800 p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-4">¿QUIERES QUE TOQUEMOS EN TU CIUDAD?</h3>
          <p className="text-gray-400 mb-6">Contáctanos para bookings y fechas disponibles</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 transition-all transform hover:scale-105">
            CONTÁCTANOS
          </button>
        </div>
      </div>
    </section>
  );
}
