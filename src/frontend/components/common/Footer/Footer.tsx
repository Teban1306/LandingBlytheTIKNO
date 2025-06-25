interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Características', href: '#features' },
      { label: 'Precios', href: '#pricing' },
      { label: 'Testimonios', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' }
    ]
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Sobre nosotros', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Carreras', href: '/careers' },
      { label: 'Contacto', href: '#contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '/privacy' },
      { label: 'Términos', href: '/terms' },
      { label: 'Cookies', href: '/cookies' }
    ]
  },
  {
    title: 'Redes Sociales',
    links: [
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Instagram', href: 'https://instagram.com' }
    ]
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src="/path-to-your-logo.png" // Reemplazar con tu logo
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Tu Empresa. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};