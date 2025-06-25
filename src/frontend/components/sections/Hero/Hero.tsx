import { Button } from '../../common/Button/Button';

export const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contenido principal */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tu Producto Innovador
              <span className="text-blue-600"> Para el Futuro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Descubre cómo nuestro producto revolucionario está transformando la industria
              y mejorando la vida de las personas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="large">
                Comenzar Ahora
              </Button>
              <Button variant="outline" size="large">
                Saber Más
              </Button>
            </div>
            {/* Métricas o social proof */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-gray-900">10K+</h4>
                <p className="text-gray-600">Usuarios Activos</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900">95%</h4>
                <p className="text-gray-600">Satisfacción</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-3xl font-bold text-gray-900">24/7</h4>
                <p className="text-gray-600">Soporte</p>
              </div>
            </div>
          </div>
          {/* Imagen o ilustración */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/path-to-your-hero-image.png" // Reemplazar con tu imagen
                alt="Hero Illustration"
                className="relative w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};