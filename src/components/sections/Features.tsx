import React from 'react';
import { LineChart, Brain, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: 'Advanced AI Analysis',
    description: 'Leverage cutting-edge machine learning algorithms to analyze complex data patterns.',
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-500" />,
    title: 'Real-time Analytics',
    description: 'Monitor and analyze your data in real-time with interactive dashboards.',
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: 'Lightning Fast',
    description: 'Process millions of data points in seconds with our optimized infrastructure.',
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security measures to protect your sensitive data.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for Data Analysis
          </h2>
          <p className="text-gray-400 text-xl">
            Everything you need to understand and leverage your data effectively
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
