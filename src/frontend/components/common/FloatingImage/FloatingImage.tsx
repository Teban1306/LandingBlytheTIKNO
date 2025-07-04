import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FloatingImageProps {
  imagePath: string;
  altText?: string;
  size?: number;
  className?: string;
}

const funFacts = [
  '¿Sabías que la primera Blythe fue creada en 1972 por Allison Katzman?',
  'Los ojos de Blythe cambian de color al tirar de una cuerda',
  'En 2001, la fotógrafa Gina Garan revivió la popularidad de Blythe',
  'Cada Blythe es única y puede ser personalizada',
  'Las Blythe son muy populares en Japón y se usan en campañas publicitarias',
  'El tamaño de la cabeza de una Blythe es 4 veces más grande que lo normal',
  'Existen comunidades de coleccionistas en todo el mundo'
];


export const FloatingImage = ({ imagePath, altText = '', size = 150, className = '' }: FloatingImageProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const floatingImage = document.querySelector('.floating-image');
      
      gsap.fromTo(floatingImage,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: document.body,
             start: '15% top',
            toggleActions: 'play none none reverse'
          }
        }
      );
      // Cambiar diálogos al hacer scroll
      let currentFactIndex = 0;
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * (funFacts.length - 1));
          if (newIndex !== currentFactIndex && newIndex < funFacts.length) {
            currentFactIndex = newIndex;
            const dialogBox = document.querySelector('.dialog-box');
            if (dialogBox) {
              gsap.to(dialogBox, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  dialogBox.textContent = funFacts[currentFactIndex];
                  gsap.to(dialogBox, {
                    opacity: 1,
                    duration: 0.5
                  });
                }
              });
            }
          }
        },
        scrub: 2
      });
    }
  }, []);

  return (
    <div className={`floating-image flex items-end gap-4 transition-all duration-500 ease-out opacity-0 translate-y-6 ${className}`}>
      <div className="dialog-box bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs text-sm">
          {funFacts[0]}
        </div>
      <img
        src={imagePath}
        alt={altText}
        className="object-contain rounded-full shadow-lg"
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};