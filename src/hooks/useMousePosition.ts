import { useState, useEffect } from 'react';
import { Point } from '../types/particle';

export function useMousePosition() {
  const [mousePos, setMousePos] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePos;
}
