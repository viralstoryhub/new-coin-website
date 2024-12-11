import React from 'react';
import { Brain, LineChart, Zap, Shield, Layout, Coins } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    title: "AI-Powered Trading Assistance",
    description: "Smart insights and personalized recommendations powered by advanced AI algorithms analyzing real-time market data."
  },
  {
    icon: <LineChart className="w-6 h-6 text-purple-400" />,
    title: "Advanced Trading Tools",
    description: "Dynamic charts, technical indicators, and a customizable dashboard tailored to your trading style."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "High-Speed Transactions",
    description: "Lightning-fast execution and minimal fees powered by Solana blockchain's high throughput."
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "Robust Security",
    description: "Multi-factor authentication, encrypted data, and continuous security audits to protect your assets."
  },
  {
    icon: <Layout className="w-6 h-6 text-pink-400" />,
    title: "User-Friendly Experience",
    description: "Intuitive design optimized for both beginners and experienced traders across all devices."
  },
  {
    icon: <Coins className="w-6 h-6 text-orange-400" />,
    title: "Wide Asset Selection",
    description: "Trade diverse cryptocurrencies and gain early access to promising new projects on Solana."
  }
];

export default function PlatformOverview() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text px-4 sm:px-0 leading-normal pb-2">
            Experience Seamless and<br />Intelligent Trading
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto px-4 sm:px-6">
            SolAIra Exchange is a cutting-edge cryptocurrency trading platform that leverages artificial intelligence 
            and the Solana blockchain to provide a seamless, secure, and intuitive trading experience.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-colors"
            >
              <div className="bg-gray-800/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-900/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">100ms</div>
            <div className="text-gray-400">Transaction Speed</div>
          </div>
          <div className="bg-gray-900/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Trading Pairs</div>
          </div>
          <div className="bg-gray-900/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="bg-gray-900/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">0.01%</div>
            <div className="text-gray-400">Base Fee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
