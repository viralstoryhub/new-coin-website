import React from 'react';
import { CreditCard, Wallet, Globe, Zap, ShieldCheck, Coins } from 'lucide-react';

export default function CryptoCard() {
  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Worldwide Acceptance",
      description: "Use your card at millions of locations worldwide, anywhere major cards are accepted"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Instant Conversion",
      description: "Real-time conversion of your crypto to fiat at the best available rates"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
      title: "Secure Transactions",
      description: "Advanced security features and real-time fraud protection"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Card Visualization */}
          <div className="relative">
            {/* Card display */}
            <div className="relative perspective-1000">
              <div className="relative transform rotate-y-0 transition-transform duration-1000 hover:rotate-y-180">
                {/* Card front */}
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 rounded-2xl aspect-[1.586/1] relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black opacity-20" />
                  <div className="relative">
                    <div className="flex justify-between items-start">
                      <Coins className="w-12 h-12 text-white" />
                      <div className="text-right">
                        <div className="text-white font-bold">SolAIra</div>
                        <div className="text-white/80 text-sm">CRYPTO CARD</div>
                      </div>
                    </div>
                    
                    <div className="mt-16">
                      <div className="text-white/80 text-sm mb-1">Card Number</div>
                      <div className="font-mono text-white text-xl tracking-wider">•••• •••• •••• 4242</div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-end">
                      <div>
                        <div className="text-white/80 text-sm">Card Holder</div>
                        <div className="text-white">JOHN DOE</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full" />
                        <div className="w-8 h-8 bg-white/30 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">2%</div>
                <div className="text-gray-400 text-sm">Crypto Cashback</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">0%</div>
                <div className="text-gray-400 text-sm">Foreign Fees</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-10 h-10 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">
                Bridging Crypto with Real-World Spending
              </h2>
            </div>

            <p className="text-gray-400 text-lg mb-8">
              Transform your crypto portfolio into everyday spending power. The SolAIra Card seamlessly connects your digital assets with real-world transactions, providing unprecedented flexibility in how you use your cryptocurrency.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rewards Program Preview */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-6 h-6 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">Rewards Program</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Earn up to 2% crypto cashback on every purchase. Stack rewards and watch your crypto portfolio grow with every transaction.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                Join Waitlist
                <CreditCard className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
