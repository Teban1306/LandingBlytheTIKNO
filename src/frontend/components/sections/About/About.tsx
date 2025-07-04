import { Card } from '../../common/Card/Card';
import SplitText from '../../common/SplitText/SplitText';
import ScrollFloat from '../../common/ScrollFloat/ScrollFloat';

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureCard[] = [
  {
    title: 'Cabeza grande y ojos intercambiables',
    description: 'Característica distintiva que permite cambiar el color de ojos con un mecanismo único.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: 'Personalización total',
    description: 'Cada muñeca puede ser única con cambios en maquillaje, pelo y vestimenta.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Comunidad artística activa',
    description: 'Únete a una vibrante comunidad global de coleccionistas y artistas.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 space-y-6">
          <div className="w-full text-center">
            <SplitText
              text="¿Qué es una Blythe Doll?"
              className="text-4xl font-serif font-bold text-neutral-800"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
          <div className="w-full max-w-3xl">
            <SplitText
              text="Las Blythe son muñecas artísticas únicas, reconocidas por sus cabezas grandes y ojos cambiantes. Creadas originalmente en 1972, hoy son un fenómeno global que combina coleccionismo y arte. Cada Blythe es una lienzo en blanco para la creatividad, permitiendo personalizaciones que la hacen verdaderamente única."
              className="text-lg text-neutral-600"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollFloat
              key={index}
              containerClassName="h-full"
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=20%"
              scrollEnd="bottom center"
              stagger={0.2}
            >
              <div className="h-full">
                <Card
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  className="bg-white/30 hover:bg-white/40 transition-colors duration-300 h-full"
                >
                  {feature.icon}
                </Card>
              </div>
            </ScrollFloat>
          ))}
        </div>
      </div>
    </section>
  );
};