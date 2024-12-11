import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    features: [
      'Up to 10,000 data points',
      'Basic AI analysis',
      'Real-time dashboard',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '99',
    features: [
      'Up to 100,000 data points',
      'Advanced AI analysis',
      'Custom dashboards',
      'Priority support',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited data points',
      'Custom AI models',
      'Dedicated support',
      'SLA guarantee',
      'Advanced security',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-xl">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mt-4">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-400 ml-1">/month</span>
                )}
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-blue-500 w-5 h-5 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                } transition`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
