import { Flame } from 'lucide-react';
import bioBg from '../components/fondo1.png';

export default function Biography() {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/85"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl">

        <div className="flex items-center justify-center mb-12">
          <Flame className="w-12 h-12 text-red-600 mr-4" />
          <h2
            className="text-5xl md:text-6xl font-black text-red-600"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            BIOGRAFÍA
          </h2>
          <Flame className="w-12 h-12 text-red-600 ml-4" />
        </div>

        <div className="bg-black/70 backdrop-blur-md border border-red-900 shadow-[0_0_40px_rgba(220,38,38,0.15)] p-8 md:p-12">
          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p className="text-xl font-bold text-white">
              Nacidos en el underground, forjados en el caos.
            </p>

            <p>
              <span className="text-red-600 font-bold">Road to hell</span> es un proyecto que se enmarca en la nueva corriente del hardcore. Adopta elementos musicales que actualmente guían la vanguardia del género integrando entre sus composiciones riffs agudos, power beats y propuestas de no más de 2 minutos.

            </p>

            <p>
              Este proyecto se distancia de sus raíces musicales en la medida que no nos identificamos con el mensaje alusivo a la hermandad ni fraternidad, tampoco es de nuestro interés aludir a mensajes políticos o religiosos y mucho menos de instigar al odio sectorizado
            </p>

            <p>
              El mensaje de la banda simplemente es encarnar la vivencia de cualquier persona promedio que, así como todos, obra mal, odia, tiene sus pasiones y debilidades y su cabeza internamente es un infierno con mil problemas que lo aquejan. En este contexto, la música estridente funge como aquel puente que le permite casi que como un ejercicio terapéutico hacerle frente a ese infierno, como una forma de sobrellevarlo.
            </p>

            <p>
             Más que una banda nos reconocemos como un grupo de amigos emprendiendo un proyecto que encarna en cada tema una pasión que nos une: el ruido y la bulla, nuestro
ideal no trasciende más allá de ello, y junto a nosotros, a road to hell lo integra cada persona -dentro o fuera de la banda- que se identifique con dicho mensaje.
            </p>

            <p className="text-xl font-bold text-white border-l-4 border-red-600 pl-4">
              No hacemos compromisos. No buscamos agradar. Solo hacemos ruido que nos sale de las entrañas.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold text-red-600 mb-4">INFLUENCIAS</h3>
              <p className="text-gray-400">
                · Ultrametal · Knocked Loose · Godflesh
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

