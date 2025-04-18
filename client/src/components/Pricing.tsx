import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'Forever',
      description: 'Get started with essential features',
      features: [
        'Up to 100 tags',
        'Basic search',
        'Mobile app access',
        'Cloud sync'
      ],
      recommended: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'Everything you need for advanced organization',
      features: [
        'Unlimited tags',
        'Advanced search filters',
        'Team sharing',
        'Priority support',
        'Custom tag categories',
        'API access'
      ],
      recommended: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For large teams with advanced needs',
      features: [
        'All Pro features',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'User management',
        'Usage analytics'
      ],
      recommended: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg overflow-hidden ${
                plan.recommended
                  ? 'transform md:-translate-y-4 shadow-2xl border-2 border-primary'
                  : 'shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="bg-primary text-white text-center py-2 font-medium">
                  Recommended
                </div>
              )}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600"> {plan.period}</span>
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {React.createElement(FaIcons.FaCheck, { className: "text-green-500 mr-2" })}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.recommended
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-primary border border-primary'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 