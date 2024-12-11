import React from 'react';
import { Milestone, Timer, Rocket, Code, Users, Coins, Globe, Zap, Brain } from 'lucide-react';

const phases = [
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    phase: "Phase 1",
    title: "Foundation",
    timeline: "Q1 2024",
    status: "completed",
    items: [
      "Market Research & Analysis",
      "Team Assembly & Advisory Board",
      "Initial Branding & Website",
      "Technical Architecture Planning"
    ]
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    phase: "Phase 2",
    title: "MVP Development",
    timeline: "Q2 2024",
    status: "in-progress",
    items: [
      "AI Trading Bot Development",
      "Rug-Pull Detection Tool",
      "User Interface Design",
      "Security Implementation"
    ]
  },
  {
    icon: <Users className="w-6 h-6 text-green-400" />,
    phase: "Phase 3",
    title: "Beta Launch",
    timeline: "Q3 2024",
    status: "upcoming",
    items: [
      "Beta Testing Program",
      "Community Building",
      "Feature Expansion",
      "Performance Optimization"
    ]
  },
  {
    icon: <Coins className="w-6 h-6 text-yellow-400" />,
    phase: "Phase 4",
    title: "Token Launch",
    timeline: "Q4 2024",
    status: "upcoming",
    items: [
      "SAI Token Creation",
      "Initial Token Offering",
      "Exchange Listings",
      "Staking Program Launch"
    ]
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-400" />,
    phase: "Phase 5",
    title: "Feature Expansion",
    timeline: "Q1-Q2 2025",
    status: "upcoming",
    items: [
      "Enhanced AI Capabilities",
      "Social Trading Features",
      "DeFi Integration",
      "Crypto Debit Card Launch"
    ]
  },
  {
    icon: <Globe className="w-6 h-6 text-pink-400" />,
    phase: "Phase 6",
    title: "Global Expansion",
    timeline: "Q3 2025+",
    status: "upcoming",
    items: [
      "Multilingual Support",
      "Global Marketing Campaign",
      "International Partnerships",
      "Regulatory Compliance"
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Timer className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Development Roadmap</h2>
          </div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Our journey to revolutionize crypto trading through artificial intelligence
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 relative
                ${phase.status === 'completed' ? 'ring-2 ring-green-500/20' : 
                  phase.status === 'in-progress' ? 'ring-2 ring-blue-500/20' : ''}`}
            >
              {/* Phase indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-700 rounded-lg">
                  {phase.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold">{phase.phase}</h3>
                  <p className="text-gray-400 text-sm">{phase.timeline}</p>
                </div>
                {phase.status === 'completed' && (
                  <span className="ml-auto px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Completed
                  </span>
                )}
                {phase.status === 'in-progress' && (
                  <span className="ml-auto px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                    In Progress
                  </span>
                )}
              </div>

              <h4 className="text-xl font-semibold text-white mb-4">{phase.title}</h4>

              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Milestone className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">Key Milestones</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">100K+</div>
              <div className="text-gray-300">Active Users Goal</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">$50M+</div>
              <div className="text-gray-300">Trading Volume</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">10+</div>
              <div className="text-gray-300">Global Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
