import { useState } from 'react';
import ScrollFloat from '../../common/ScrollFloat/ScrollFloat';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  tag: 'Clasica' | 'Personalizala como quieras' | 'Creala desde cero';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/src/frontend/assets/images/Blythebasic.jpg',
    title: 'Blythe Desnuda',
    tag: 'Clasica'
  },
  {
    id: 2,
    image: '/src/frontend/assets/images/Blythemedium.webp',
    title: 'Blythe Personalizada',
    tag: 'Personalizala como quieras'
  },
  {
    id: 3,
    image: '/src/frontend/assets/images/Blytheparts.jpeg',
    title: 'Blythe Kit bricolaje',
    tag: 'Creala desde cero'
  },
  {
    id: 4,
    image: '/src/frontend/assets/images/Unic1.jpg',
    title: '',
    tag: ''
  },
  {
    id: 5,
    image: '/src/frontend/assets/images/unic2.jpg',
    title: '',
    tag: ''
  },
  {
    id: 6,
    image: '/src/frontend/assets/images/unic3.jpeg',
    title: '',
    tag: ''
  }
];

export const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const getTagColor = (tag: GalleryItem['tag']) => {
    switch (tag) {
      case 'Clasica':
        return 'bg-pink-500';
      case 'Personalizala como quieras':
        return 'bg-purple-500';
      case 'Creala desde cero':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white/40 backdrop-blur-sm"><div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollFloat
            containerClassName="text-4xl font-serif font-bold text-neutral-800 mb-6 text-center"
            animationDuration={2}
            ease="power2.out"
            scrollStart="top bottom"
            scrollEnd="top center+=100"
            stagger={0.1}
          >
            Galeria de Blythes
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`object-cover object-center w-full h-full transform transition-transform duration-300 ${hoveredItem === item.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${getTagColor(item.tag)}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <ScrollFloat
            containerClassName="text-2xl font-serif font-bold text-neutral-800 text-center"
            animationDuration={2}
            ease="power2.out"
            scrollStart="top bottom"
            scrollEnd="top center+=100"
            stagger={0.1}
          >
            Cada Blythe es única, creada con pasión y dedicación.
          </ScrollFloat>
        </div>
      </div>
    </div>


    </section>
  );
};