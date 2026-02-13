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
    { date: "25 Octubre 2025", venue: "Quitofest", city: "Quito", status: "upcoming", bands: ["mugre sur", "madbrain", "Total death", "Road to hell", "Infecto devorante", "Withblood", "Gualgura", "Retaque", "consumidor final"] },
    { date: "25 Enero 2024", venue: "Streetdown", city: "Medellín", status: "past" },
    { date: "26 Marzo 2024", venue: "Baile y mosh para la defensa personal", city: "Bogotá", status: "past", bands: ["Inmemorial", "Road to hell", "spitout", "días de agresión", "the last opportunity"] },
    { date: "20 Mayo 2024", venue: "Audiciones altavoz", city: "Medellín", status: "past" },
    { date: "20 Septiembre 2024", venue: "Nororientalfest", city: "Medellín", status: "past" },
    { date: "18 Agosto 2024", venue: "Ruido y solidaridad", city: "Medellín", status: "past", bands: ["Alta agresión", "Pelea o muere", "Krujido", "MIserable", "Infecto", "Anti-todo", "KATABAXIS", "HARTXS"] },
    { date: "19 Julio 2025", venue: "Nororientalfest", city: "Medellín", status: "past" },
    { date: "23 Agosto 2025", venue: "stoffest", city: "Medellín", status: "past" },
    { date: "25 Enero 2026", venue: "tao part fest", city: "Medellín", status: "past" },
    { date: "19 Marzo 2023", venue: "Rehen 19 años de violencia", city: "Bogotá", status: "past", bands: ["Rehen", "Pela o muere", "A call for revenge", "Road to hell", "Enemy.906", "Alta agresión"] },
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
