import React from 'react';
import { Bot, TrendingUp, Bell, BookOpen } from 'lucide-react';
import BotFeature from '../ui/BotFeature';
import DemoInterface from '../ui/DemoInterface';

const features = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    title: "Real-time buy/sell signals",
    description: "Get instant notifications for optimal trading opportunities"
  },
  {
    icon: <Bell className="w-6 h-6 text-blue-400" />,
    title: "Customized alerts",
    description: "Set personalized alerts for your favorite tokens"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    title: "Learning resources",
    description: "Enhance your trading skills with AI-powered insights"
  }
];

export default function AITradingBot() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 10 10 M 0 10 L 20 10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#circuit)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Demo Interface */}
          <div className="bg-gray-800 rounded-xl p-1 shadow-2xl">
            <DemoInterface />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <Bot className="w-10 h-10 text-blue-400" />
                AI Trading Assistant
              </h2>
              <p className="text-gray-400 text-lg">
                Make smarter trading decisions with our AI-powered assistant that provides real-time analysis and personalized recommendations.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <BotFeature key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
