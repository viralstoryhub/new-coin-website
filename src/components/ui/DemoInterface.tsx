import React from 'react';
import { LineChart, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function DemoInterface() {
  return (
    <div className="bg-gray-900 rounded-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          Live Trading Signals
        </h3>
        <span className="text-green-400 text-sm">Active</span>
      </div>

      {/* Mock Chart */}
      <div className="h-48 bg-gray-800 rounded-lg p-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <LineChart className="w-12 h-12 text-blue-400 opacity-50" />
        </div>
      </div>

      {/* Signal Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-green-400 mb-2">
            <ArrowUpRight className="w-4 h-4" />
            Buy Signal
          </div>
          <p className="text-white font-mono">SOL/USDT</p>
          <p className="text-sm text-gray-400">Confidence: 85%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-red-400 mb-2">
            <ArrowDownRight className="w-4 h-4" />
            Sell Signal
          </div>
          <p className="text-white font-mono">BTC/USDT</p>
          <p className="text-sm text-gray-400">Confidence: 78%</p>
        </div>
      </div>
    </div>
  );
}
