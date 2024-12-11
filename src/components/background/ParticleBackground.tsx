import React, { useEffect, useRef } from 'react';
import { useParticleSystem } from '../../hooks/useParticleSystem';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { initParticleSystem } = useParticleSystem();

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const cleanup = initParticleSystem(canvasRef.current);
    return cleanup;
  }, [initParticleSystem]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0,
        height: '100vh'
      }}
    />
  );
}
