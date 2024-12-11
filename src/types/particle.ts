export interface Point {
  x: number;
  y: number;
}

export interface Particle extends Point {
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}
