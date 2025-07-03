interface CustomizationStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: CustomizationStep[] = [
  {
    title: ' Elige tu Blythe favorita',
    description: 'Explora nuestra colección de muñecas base originales y selecciona la que más te inspire para comenzar tu creación.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: ' Diseña su estilo único',
    description: 'Personaliza cada detalle con una amplia selección de outfits, peinados y accesorios. ¡Haz que refleje tu imaginación!',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14l9-5-9-5-9 5 9 5z" />
      </svg>
    )
  },
  {
    title: ' Admira tu creación',
    description: 'Una vez terminada, podrás ver una vista previa detallada de tu Blythe personalizada antes de enviarla a producción. ¡Tu obra de arte, lista para enamorar!',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../../common/SplitText/SplitText';

export const Customize = () => {
  return (
    <section id="customize" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 mb-16">
          <SplitText
            text="Personaliza la tuya"
            className="text-4xl font-serif font-bold text-neutral-800 mb-6"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
          <SplitText
            text="Crear tu Blythe personalizada es un proceso artístico y emocionante. Te guiamos en cada paso para asegurar que tu muñeca sea exactamente como la sueñas."
            className="text-lg text-neutral-600 max-w-3xl mx-auto mb-12"
            delay={70}
            duration={1}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center p-8 bg-white/30 rounded-lg hover:bg-white/40 transition-colors duration-300 h-[320px] justify-between">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="p-4 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-3 whitespace-pre-line">
                  {step.title}
                </h3>
                <p className="text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max mt-16">
          {['/src/frontend/assets/images/vid1.mp4', '/src/frontend/assets/images/vid2.mp4', '/src/frontend/assets/images/vid3.mp4'].map((videoPath, index) => (
            <div key={index} className="relative aspect-[9/16] w-full max-w-[350px] mx-auto">
              <video
                className="w-full h-full rounded-2xl object-cover"
                autoPlay
                playsInline
                muted
                loop
                controls
                preload="auto"
              >
                <source src={videoPath} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};