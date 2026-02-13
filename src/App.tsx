import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Members from './components/Members';
import Albums from './components/Albums';
import Shows from './components/Shows';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fondo estático */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-gray-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff0000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Header también recibe el control para el menú */}
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Hero lo recibe para los botones de "Conoce la banda" */}
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        
        {activeSection === 'bio' && <Biography />}
        
        {activeSection === 'members' && <Members />}
        
        {activeSection === 'albums' && <Albums />}
        
        {/* 👇 AQUÍ ESTÁ EL CAMBIO IMPORTANTE 👇 */}
        {/* Ahora Shows tiene poder para cambiar la sección */}
        {activeSection === 'shows' && <Shows setActiveSection={setActiveSection} />}
        
        {activeSection === 'gallery' && <Gallery />}

        <Footer />
      </div>
    </div>
  );
}

export default App;