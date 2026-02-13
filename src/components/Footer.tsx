import { Mail, Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-red-600 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Branding */}
          <div>
            <h3
              className="text-3xl font-black text-red-600 mb-4"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              Road to hell hardcore
            </h3>
            <p className="text-gray-400">
              Ruido desde 2015, sin concesiones, sin límites.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">CONTACTO</h4>
            <div className="space-y-2">
              <a
                href="mailto:roadtohell33@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>roadtohell33@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">SÍGUENOS</h4>
            <div className="flex gap-4">
              
              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/roadtohell_hardcore/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>

              {/* YOUTUBE */}
              <a
                href="https://youtube.com/@roadtohell161"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>

              {/* SPOTIFY */}
              <a
                href="https://open.spotify.com/intl-es/artist/4b2DCKkmffEUt1FXxISOt0?                si=8li3LKruQIeM5emt39WOtQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-3 transition-all duration-300 hover:scale-110"
              >
                <Music className="w-6 h-6 text-white" />
              </a>

            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © 2026 Road to hell hardcore. Stay brutal.
          </p>
        </div>

      </div>
    </footer>
  );
}
