import React from 'react';
import { Users, BookOpen, MessageSquare, Trophy, Video, BookMarked } from 'lucide-react';

export default function Community() {
  const resources = [
    {
      icon: <Video className="w-6 h-6 text-blue-400" />,
      title: "Live Webinars",
      time: "Every Tuesday",
      description: "Join expert traders for live market analysis and strategy discussions"
    },
    {
      icon: <BookMarked className="w-6 h-6 text-purple-400" />,
      title: "Trading Guides",
      count: "50+ Guides",
      description: "Comprehensive tutorials from basics to advanced trading strategies"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
      title: "Community Chat",
      members: "10k+ Members",
      description: "24/7 discussion groups for market insights and strategy sharing"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Building a Knowledgeable Community</h2>
          </div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Join thousands of traders in a supportive environment where knowledge sharing and continuous learning drive success.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Community Stats */}
          <div className="bg-gray-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8">Community Highlights</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-750/50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15K+</div>
                  <div className="text-gray-300">Active Members</div>
                </div>
                <div className="bg-gray-750/50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Daily Discussions</div>
                </div>
                <div className="bg-gray-750/50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-300">Expert Contributors</div>
                </div>
                <div className="bg-gray-750/50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-300">Community Support</div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                  Join Our Community
                  <Users className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Educational Resources */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Educational Resources</h3>
            </div>

            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    {resource.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-semibold text-white">{resource.title}</h4>
                      <span className="text-sm text-gray-400">
                        {resource.time || resource.count || resource.members}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">{resource.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Upcoming Events Preview */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Upcoming Expert Session</h4>
                <Trophy className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-300 mb-2">Advanced Market Analysis Techniques</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>This Thursday</span>
                <span>•</span>
                <span>2:00 PM UTC</span>
              </div>
              <button className="mt-4 text-blue-400 hover:text-blue-300 transition text-sm">
                Set Reminder →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
