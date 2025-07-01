interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Cómo empecé a coleccionar Blythe',
    excerpt: 'Mi viaje en el mundo de las Blythe comenzó hace 5 años cuando descubrí estas encantadoras muñecas en una tienda vintage...',
    image: '/path-to-image-1.jpg', // Reemplazar con imagen real
    author: 'Carolina Ruiz',
    date: '15 Mayo 2023'
  },
  {
    id: 2,
    title: 'La historia de mi primera custom',
    excerpt: 'Personalizar mi primera Blythe fue una experiencia mágica. Aquí comparto todos los detalles del proceso...',
    image: '/path-to-image-2.jpg', // Reemplazar con imagen real
    author: 'Elena Torres',
    date: '3 Junio 2023'
  },
  {
    id: 3,
    title: 'Consejos para fotografiar muñecas',
    excerpt: 'Aprende los secretos para capturar la belleza única de tus Blythe con estos consejos profesionales de fotografía...',
    image: '/path-to-image-3.jpg', // Reemplazar con imagen real
    author: 'Marina López',
    date: '22 Junio 2023'
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-neutral-800 mb-6">
            Blog e Historias
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Descubre historias fascinantes de nuestra comunidad de coleccionistas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-md transition-colors duration-300">
            Ver más historias
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};