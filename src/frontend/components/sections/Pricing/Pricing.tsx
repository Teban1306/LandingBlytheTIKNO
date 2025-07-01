import { Button } from '../../common/Button/Button';
import { Card } from '../../common/Card/Card';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  billing: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Básico',
    price: 29,
    billing: 'mes',
    description: 'Perfecto para empezar',
    features: [
      { name: 'Hasta 10 usuarios', included: true },
      { name: 'Soporte básico', included: true },
      { name: '5GB almacenamiento', included: true },
      { name: 'API access', included: false },
      { name: 'Análisis avanzado', included: false }
    ]
  },
  {
    name: 'Pro',
    price: 79,
    billing: 'mes',
    description: 'Para equipos en crecimiento',
    highlighted: true,
    features: [
      { name: 'Hasta 50 usuarios', included: true },
      { name: 'Soporte prioritario', included: true },
      { name: '25GB almacenamiento', included: true },
      { name: 'API access', included: true },
      { name: 'Análisis avanzado', included: true }
    ]
  },
  {
    name: 'Empresarial',
    price: 149,
    billing: 'mes',
    description: 'Para grandes empresas',
    features: [
      { name: 'Usuarios ilimitados', included: true },
      { name: 'Soporte 24/7', included: true },
      { name: 'Almacenamiento ilimitado', included: true },
      { name: 'API access personalizado', included: true },
      { name: 'Análisis personalizado', included: true }
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planes y Precios
          </h2>
          <p className="text-lg text-dark-700 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.highlighted ? 'transform scale-105' : ''}`}>
              {plan.highlighted && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                  <span className="bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg shadow-primary-500/30">
                    Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full bg-dark-200 ${plan.highlighted ? 'border-2 border-primary-500 shadow-xl shadow-primary-500/20' : 'border border-dark-300'}`}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-dark-700 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-400">${plan.price}</span>
                    <span className="text-dark-700">/{plan.billing}</span>
                  </div>
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full mb-6"
                  >
                    Comenzar ahora
                  </Button>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-dark-700"
                      >
                        <svg
                          className={`w-5 h-5 mr-2 ${feature.included ? 'text-primary-500' : 'text-dark-500'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {feature.included ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          )}
                        </svg>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};