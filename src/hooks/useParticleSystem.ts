import { useCallback } from 'react';
import { PARTICLE_CONFIG } from '../config/particleConfig';
import { createParticle, updateParticle, drawParticle, drawConnections } from '../utils/particleUtils';
import { useMousePosition } from './useMousePosition';

export function useParticleSystem() {
  const mousePos = useMousePosition();

  const initParticleSystem = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;
    let particles: any[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resizeCanvas();
      particles = Array.from({ length: PARTICLE_CONFIG.COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        updateParticle(particle, canvas.width, canvas.height, mousePos);
        drawParticle(ctx, particle);
      });

      drawConnections(ctx, particles);
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return { initParticleSystem };
}
