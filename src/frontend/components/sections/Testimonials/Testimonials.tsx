import { Card } from '../../common/Card/Card';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ana Martínez',
    role: 'CEO',
    company: 'Tech Solutions',
    image: '/path-to-image-1.jpg', // Reemplazar con imagen real
    quote: 'Este producto ha transformado completamente la manera en que trabajamos. La eficiencia ha aumentado significativamente.',
    rating: 5
  },
  {
    name: 'Carlos Ruiz',
    role: 'Director de Marketing',
    company: 'Digital Innovation',
    image: '/path-to-image-2.jpg', // Reemplazar con imagen real
    quote: 'La mejor inversión que hemos hecho este año. El soporte al cliente es excepcional.',
    rating: 5
  },
  {
    name: 'Laura González',
    role: 'Desarrolladora Senior',
    company: 'Software Corp',
    image: '/path-to-image-3.jpg', // Reemplazar con imagen real
    quote: 'La integración fue muy sencilla y los resultados fueron inmediatos. Totalmente recomendado.',
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-primary-500' : 'text-dark-500'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-dark-700 max-w-2xl mx-auto">
            Descubre por qué las empresas confían en nosotros para impulsar su crecimiento
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-dark-100 border border-dark-300">
              <div className="p-6">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 mb-6 text-dark-700 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-dark-700">
                      {testimonial.role} en {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};