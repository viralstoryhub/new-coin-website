import { Particle, Point } from '../types/particle';
import { PARTICLE_CONFIG } from '../config/particleConfig';

export function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * (PARTICLE_CONFIG.MAX_SIZE - PARTICLE_CONFIG.MIN_SIZE) + PARTICLE_CONFIG.MIN_SIZE,
    speedX: (Math.random() - 0.5) * PARTICLE_CONFIG.SPEED,
    speedY: (Math.random() - 0.5) * PARTICLE_CONFIG.SPEED,
    opacity: Math.random() * (PARTICLE_CONFIG.MAX_OPACITY - PARTICLE_CONFIG.MIN_OPACITY) + PARTICLE_CONFIG.MIN_OPACITY,
  };
}

export function updateParticle(particle: Particle, width: number, height: number, mousePos: Point) {
  // Update position with easing
  particle.x += particle.speedX;
  particle.y += particle.speedY;

  // Mouse interaction with smooth easing
  const dx = mousePos.x - particle.x;
  const dy = mousePos.y - particle.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < PARTICLE_CONFIG.MOUSE_RADIUS) {
    const force = (PARTICLE_CONFIG.MOUSE_RADIUS - distance) / PARTICLE_CONFIG.MOUSE_RADIUS;
    const easing = 0.2;
    particle.speedX -= (dx / distance) * force * PARTICLE_CONFIG.MOUSE_FORCE * easing;
    particle.speedY -= (dy / distance) * force * PARTICLE_CONFIG.MOUSE_FORCE * easing;
  }

  // Add slight randomness to movement
  particle.speedX += (Math.random() - 0.5) * 0.01;
  particle.speedY += (Math.random() - 0.5) * 0.01;

  // Limit speed
  const maxSpeed = PARTICLE_CONFIG.SPEED;
  const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
  if (currentSpeed > maxSpeed) {
    particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
    particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
  }

  // Wrap around screen edges with smooth transition
  if (particle.x < 0) particle.x = width;
  if (particle.x > width) particle.x = 0;
  if (particle.y < 0) particle.y = height;
  if (particle.y > height) particle.y = 0;

  // Smooth opacity fluctuation
  particle.opacity += (Math.random() - 0.5) * 0.02;
  particle.opacity = Math.max(PARTICLE_CONFIG.MIN_OPACITY, Math.min(PARTICLE_CONFIG.MAX_OPACITY, particle.opacity));
}

export function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
  ctx.fill();
}

export function drawConnections(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  ctx.lineWidth = 0.5;

  particles.forEach((particle1, i) => {
    particles.slice(i + 1).forEach(particle2 => {
      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < PARTICLE_CONFIG.CONNECTION_RADIUS) {
        const opacity = (1 - distance / PARTICLE_CONFIG.CONNECTION_RADIUS) * 0.15;
        ctx.beginPath();
        ctx.moveTo(particle1.x, particle1.y);
        ctx.lineTo(particle2.x, particle2.y);
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
        ctx.stroke();
      }
    });
  });
}
