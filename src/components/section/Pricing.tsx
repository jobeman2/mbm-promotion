'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 2999,
    regular: 3999,
    save: '25%',
    features: [true, true, false, false],
    highlight: false,
    description: 'Perfect for individuals getting started.',
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: 7499,
    regular: 9999,
    save: '30%',
    features: [true, true, true, false],
    highlight: true,
    description: 'Ideal for growing businesses with more needs.',
    buttonText: 'Choose Pro',
  },
  {
    name: 'Enterprise',
    price: 12499,
    regular: 18999,
    save: '35%',
    features: [true, true, true, true],
    highlight: false,
    description: 'Full-featured plan for enterprises and teams.',
    buttonText: 'Get Started',
  },
];

const features = [
  'Custom RBT Code Setup',
  'Free Voice/Data Incentives',
  'Monthly Campaign Analytics',
  'Dedicated Account Manager',
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 font-dm bg-gradient-to-b from-green-50 to-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4"
        >
          Flexible Plans for Every Brand
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Reach customers with audio ads. Only pay per subscriber + per listen. Plans built for impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const isCenter = plan.highlight;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: isCenter ? 0.95 : 1 }}
              whileInView={{ opacity: 1, y: 0, scale: isCenter ? 1.05 : 1 }}
              whileHover={{ scale: isCenter ? 1.1 : 1.03 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className={`rounded-2xl p-8 shadow-sm transition flex flex-col items-center cursor-pointer
                ${
                  isCenter
                    ? 'border-2 border-green-600 bg-green-50 text-green-900 scale-105 z-10 relative shadow-lg'
                    : 'border border-gray-200 text-gray-800 hover:shadow-lg'
                }`}
              style={{
                boxShadow: isCenter
                  ? '0 20px 30px rgba(30, 80, 0, 0.2)'
                  : '0 8px 15px rgba(0, 0, 0, 0.1)',
              }}
              aria-label={`Select ${plan.name} Plan`}
              tabIndex={0}
              role="button"
            >
              <h3 className={`text-2xl font-bold mb-2 ${isCenter ? 'text-green-700' : 'text-gray-800'}`}>
                {plan.name}
              </h3>

              <p className="text-gray-600 mb-4 text-center">{plan.description}</p>

              <p className="text-sm text-gray-600 mb-1 line-through">
                Renews at {plan.regular.toLocaleString()} ETB/month
              </p>

              <div className="text-sm font-medium bg-[#e9f7b9] text-[#6a8a00] rounded-full px-3 py-1 w-fit mb-4 select-none">
                Save {plan.save}
              </div>

              <div className={`text-4xl font-bold mb-8 ${isCenter ? 'text-green-700' : 'text-gray-800'}`}>
                {plan.price.toLocaleString()} ETB
                <span className="text-lg">/mo</span>
              </div>

              <ul className="space-y-3 mb-8 w-full max-w-xs">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {plan.features[i] ? (
                      <Check className="w-5 h-5 text-[#7dbb1f]" aria-hidden="true" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    )}
                    <span className={!plan.features[i] && isCenter ? 'text-[#a1c973] line-through' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition
                  bg-[#dbfce7] text-green-900 hover:bg-[#c6f4ce]
                  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2`}
              >
                {plan.buttonText ?? 'Get Started'}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
