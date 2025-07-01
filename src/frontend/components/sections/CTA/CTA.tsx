import { Button } from '../../common/Button/Button';

export const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-pastel-pink to-pastel-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-8">
          Empieza tu colección hoy
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12">
          Descubre el encanto único de las Blythe Dolls y forma parte de nuestra comunidad de coleccionistas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary"
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-full hover:transform hover:scale-105 transition-all duration-300"
          >
            Ver catálogo
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-full hover:transform hover:scale-105 transition-all duration-300"
          >
            Comprar ahora
          </Button>
        </div>
      </div>
    </section>
  );
};