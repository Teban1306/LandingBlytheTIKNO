interface Review {
  id: number;
  name: string;
  quote: string;
  image: string;
  badge?: string;
  verified?: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ana M.',
    quote: 'Mi muñeca personalizada es una obra de arte.',
    image: '/src/frontend/assets/images/muñ1.jpg',
    badge: 'Top Cliente',
    verified: true
  },
  {
    id: 2,
    name: 'Laura S.',
    quote: 'Cada detalle es perfecto, superó mis expectativas.',
    image: '/src/frontend/assets/images/muñ2.jpg',
    badge: 'Coleccionista',
    verified: true
  },
  {
    id: 3,
    name: 'María P.',
    quote: 'La calidad y atención al detalle son excepcionales.',
    image: '/src/frontend/assets/images/muñ3.jpg',
    badge: 'Verificada',
    verified: true
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-pastel-pink/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-2xl font-medium text-primary-500">
             Testimonios de la comunidad
          </h3>
          <h2 className="text-4xl font-serif font-bold text-neutral-800">
            Lo que dicen quienes ya vivieron la experiencia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/images/user-avatar.svg"
                    alt={`Avatar de ${review.name}`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex items-center">
                    <p className="font-semibold text-neutral-800">{review.name}</p>
                    {review.verified && (
                      <span className="ml-2 text-primary-500" title="Cliente Verificado">✅</span>
                    )}
                  </div>
                </div>
                {review.badge && (
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full font-medium mb-4">
                    {review.badge}
                  </span>
                )}
                <blockquote className="text-lg italic text-neutral-600 mb-6">
                  "{review.quote}"
                </blockquote>
                <div className="rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={review.image}
                    alt={`Muñeca personalizada de ${review.name}`}
                    className="w-full h-64 object-contain rounded-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-medium text-neutral-800 mb-4">
            ¿Tienes una historia que contar? 💌
          </h3>
          <p className="text-lg text-neutral-600 mb-8">
            Comparte tu experiencia con nuestra comunidad.
          </p>
          <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-300">
            [ Enviar historia ]
          </button>
        </div>
      </div>
    </section>
  );
};