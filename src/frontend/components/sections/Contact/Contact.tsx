import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '../../common/Button/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aquí irá la lógica de envío al backend
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Encabezado de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contáctanos
            </h2>
            <p className="text-lg text-dark-700">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte
            </p>
          </div>

          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-dark-600"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-dark-600"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-dark-200 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-dark-600"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </div>

            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-dark-200 border border-primary-500 rounded-lg">
                <p className="text-primary-400 text-center">
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-dark-200 border border-red-500 rounded-lg">
                <p className="text-red-500 text-center">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </p>
              </div>
            )}
          </form>

          {/* Información de contacto adicional */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Correo electrónico</h3>
              <p className="text-dark-700">soporte@tuempresa.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Teléfono</h3>
              <p className="text-dark-700">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};