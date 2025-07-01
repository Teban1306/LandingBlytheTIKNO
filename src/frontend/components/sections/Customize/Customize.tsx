interface CustomizationStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: CustomizationStep[] = [
  {
    title: 'Selecciona modelo base',
    description: 'Escoge entre nuestra colección de Blythes originales para comenzar tu personalización.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: 'Escoge outfit y accesorios',
    description: 'Personaliza cada detalle, desde el vestuario hasta los más pequeños accesorios.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: 'Recibe en casa',
    description: 'Tu Blythe personalizada llegará cuidadosamente empaquetada a la puerta de tu hogar.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

export const Customize = () => {
  return (
    <section id="customize" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
            Personaliza la tuya
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-12">
            Crear tu Blythe personalizada es un proceso artístico y emocionante. 
            Te guiamos en cada paso para asegurar que tu muñeca sea exactamente como la sueñas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center p-6 bg-white/30 rounded-lg hover:bg-white/40 transition-colors duration-300">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="p-4 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};