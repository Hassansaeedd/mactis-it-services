import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

export const ParticlesBackground: React.FC<ParticlesProps> = ({
  className = '',
  quantity = 60,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseRadius = 160;
  const { theme } = useTheme();

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d');
    }
    initCanvas();
    animate();
    window.addEventListener('resize', initCanvas);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', initCanvas);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [theme]);

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      particles.current = [];
      const dpr = window.devicePixelRatio || 1;
      const rect = canvasContainerRef.current.getBoundingClientRect();
      
      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;
      canvasRef.current.style.width = `${rect.width}px`;
      canvasRef.current.style.height = `${rect.height}px`;
      context.current.scale(dpr, dpr);

      for (let i = 0; i < quantity; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const size = Math.random() * 2 + 1;
        const dx = (Math.random() - 0.5) * 0.6;
        const dy = (Math.random() - 0.5) * 0.6;
        const alpha = Math.random() * 0.5 + 0.2;
        particles.current.push({ x, y, size, dx, dy, alpha, initialAlpha: alpha });
      }
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.current = { x, y };
    }
  };

  const animate = () => {
    if (!canvasRef.current || !context.current || !canvasContainerRef.current) return;
    
    const rect = canvasContainerRef.current.getBoundingClientRect();
    const ctx = context.current;
    ctx.clearRect(0, 0, rect.width, rect.height);

    const isDark = theme === 'dark';
    const particleColor = isDark ? '139, 92, 246' : '109, 40, 217'; // Primary Purple RGB
    const accentColor = isDark ? '59, 130, 246' : '37, 99, 235'; // Blue RGB

    // Draw particle lines & connections
    for (let i = 0; i < particles.current.length; i++) {
      const p = particles.current[i];

      // Update position
      p.x += p.dx;
      p.y += p.dy;

      // Bounce on edges
      if (p.x < 0 || p.x > rect.width) p.dx *= -1;
      if (p.y < 0 || p.y > rect.height) p.dy *= -1;

      // Mouse proximity interaction
      const mouseDist = Math.hypot(p.x - mouse.current.x, p.y - mouse.current.y);
      if (mouseDist < mouseRadius) {
        p.alpha = Math.min(1, p.initialAlpha + (1 - mouseDist / mouseRadius) * 0.6);
        // Connect to mouse with subtle beam
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.current.x, mouse.current.y);
        ctx.strokeStyle = `rgba(${accentColor}, ${(1 - mouseDist / mouseRadius) * (isDark ? 0.25 : 0.15)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      } else {
        p.alpha = p.initialAlpha;
      }

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
      ctx.shadowColor = `rgba(${particleColor}, 0.8)`;
      ctx.shadowBlur = p.size * 2;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw line to nearby particles
      for (let j = i + 1; j < particles.current.length; j++) {
        const p2 = particles.current[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineAlpha = (1 - dist / 110) * 0.15;
          ctx.strokeStyle = `rgba(${particleColor}, ${lineAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  };

  return (
    <div ref={canvasContainerRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default ParticlesBackground;
