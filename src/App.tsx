import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PlatformOverview from './components/sections/PlatformOverview';
import AITradingBot from './components/sections/AITradingBot';
import Roadmap from './components/sections/Roadmap';
import RugPullDetection from './components/sections/RugPullDetection';
import Features from './components/sections/Features';
import Community from './components/sections/Community';
import CryptoCard from './components/sections/CryptoCard';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <PlatformOverview />
      <AITradingBot />
      <Roadmap />
      <RugPullDetection />
      <Features />
      <Community />
      <CryptoCard />
      <Footer />
    </div>
  );
}

export default App;
