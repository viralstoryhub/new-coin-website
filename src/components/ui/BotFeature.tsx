import React from 'react';

interface BotFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BotFeature({ icon, title, description }: BotFeatureProps) {
  return (
    <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
      <div className="shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
