import { Image as ImageIcon, Video } from 'lucide-react';
import { useState } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
}

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const media: MediaItem[] = [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Live at Metal Fest 2024'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Crowd going wild'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'War Machine - Official Video'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Studio Session 2023'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/1134406/pexels-photo-1134406.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Underground Club Show'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Live Performance - Dystopia'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Band Promo Shot'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Tour Bus Life'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Behind the Scenes - Ashes of Tomorrow'
    },
  ];

  return (
    <section className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-16">
          <ImageIcon className="w-12 h-12 text-red-600 mr-4" />
          <h2 className="text-5xl md:text-6xl font-black text-red-600" style={{ fontFamily: 'Impact, sans-serif' }}>
            GALERÍA
          </h2>
          <ImageIcon className="w-12 h-12 text-red-600 ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <div
              key={index}
              className="relative aspect-video bg-black/60 backdrop-blur border-2 border-gray-800 hover:border-red-600 transition-all cursor-pointer group overflow-hidden"
              onClick={() => setSelectedMedia(item)}
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">{selectedMedia.title}</h3>
              <button
                onClick={() => setSelectedMedia(null)}
                className="text-white hover:text-red-600 text-4xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="w-full h-auto border-4 border-red-600"
              />
            ) : (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.url}
                  className="w-full h-full border-4 border-red-600"
                  allowFullScreen
                  title={selectedMedia.title}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
