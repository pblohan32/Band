import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'INICIO' },
    { id: 'bio', label: 'BIOGRAFÍA' },
    { id: 'members', label: 'INTEGRANTES' },
    { id: 'albums', label: 'ÁLBUMES' },
    { id: 'shows', label: 'CONCIERTOS' },
    { id: 'gallery', label: 'GALERÍA' },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-red-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1
            className="text-3xl md:text-4xl font-black tracking-tighter text-red-600 cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => handleClick('home')}
            style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            BRUTAL BEATDOWN
          </h1>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`text-sm font-bold tracking-wider transition-all hover:text-red-600 hover:scale-105 ${
                  activeSection === item.id ? 'text-red-600 border-b-2 border-red-600' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`text-left text-sm font-bold tracking-wider transition-all hover:text-red-600 ${
                  activeSection === item.id ? 'text-red-600' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
