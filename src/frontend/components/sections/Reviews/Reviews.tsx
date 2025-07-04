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
    image: '/images/muñ1.jpg',
    badge: 'Top Cliente',
    verified: true
  },
  {
    id: 2,
    name: 'Laura S.',
    quote: 'Cada detalle es perfecto, superó mis expectativas.',
    image: '/images/muñ2.jpg',
    badge: 'Coleccionista',
    verified: true
  },
  {
    id: 3,
    name: 'María P.',
    quote: 'La calidad y atención al detalle son excepcionales.',
    image: '/images/muñ3.jpg',
    badge: 'Verificada',
    verified: true
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-12 bg-white/30 backdrop-blur-sm">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-12 shadow-lg mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto">
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
            <div key={review.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/images/user-avatar.svg"
                    alt={`Avatar de ${review.name}`}
                    className="w-10 h-10 rounded-full object-cover"
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
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={review.image}
                    alt={`Muñeca personalizada de ${review.name}`}
                    className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};