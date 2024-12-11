import React from 'react';
import { Shield, AlertTriangle, Lock, LineChart, Bell } from 'lucide-react';

export default function RugPullDetection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">
                Enhancing Security with Rug-Pull Detection
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg mb-8">
              In the volatile world of cryptocurrency, security is paramount. Our advanced rug-pull detection system provides you with the tools and insights needed to make informed, secure investment decisions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Risk Assessment Tools</h3>
                  <p className="text-gray-400">
                    Our AI-powered system continuously monitors and evaluates tokens for potential risks, providing real-time safety assessments and detailed risk analysis reports.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Lock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Safety Indicators</h3>
                  <p className="text-gray-400">
                    Access comprehensive safety ratings that analyze liquidity locks, ownership concentration, contract verification, and historical trading patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Bell className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proactive Protection</h3>
                  <p className="text-gray-400">
                    Receive instant alerts about suspicious activities, contract changes, and potential security threats before they impact your investments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side visualization */}
          <div className="relative">
            <div className="bg-gray-800 rounded-xl p-8 relative z-10">
              {/* Security Score Visualization */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Security Analysis</h3>
                  <LineChart className="w-6 h-6 text-blue-400" />
                </div>
                <div className="space-y-4">
                  {/* Mock security metrics */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Contract Verification</span>
                      <span className="text-green-400">98%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Liquidity Analysis</span>
                      <span className="text-blue-400">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Ownership Distribution</span>
                      <span className="text-purple-400">92%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 transform translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
