interface Review {
  id: number;
  name: string;
  quote: string;
  image: string;
  instagram?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ana M.',
    quote: 'Mi muñeca personalizada es una obra de arte.',
    image: '/path-to-image-1.jpg', // Reemplazar con imagen real
    instagram: '@ana.blythe'
  },
  {
    id: 2,
    name: 'Laura S.',
    quote: 'Cada detalle es perfecto, superó mis expectativas.',
    image: '/path-to-image-2.jpg', // Reemplazar con imagen real
    instagram: '@laura.dolls'
  },
  {
    id: 3,
    name: 'María P.',
    quote: 'La calidad y atención al detalle son excepcionales.',
    image: '/path-to-image-3.jpg', // Reemplazar con imagen real
    instagram: '@maria.collector'
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-pastel-pink/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
            Testimonios de nuestra comunidad
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Descubre lo que dicen nuestros clientes sobre sus experiencias con nuestras Blythe Dolls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={review.image}
                  alt={`Cliente ${review.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <blockquote className="text-lg italic text-neutral-600 mb-4">
                  "{review.quote}"
                </blockquote>
                <p className="font-semibold text-neutral-800">{review.name}</p>
                {review.instagram && (
                  <a
                    href={`https://instagram.com/${review.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 transition-colors duration-300 flex items-center justify-center mt-2"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    {review.instagram}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};