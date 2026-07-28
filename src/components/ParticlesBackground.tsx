import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

export const ParticlesBackground: React.FC<ParticlesProps> = ({
  className = '',
  quantity = 45,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const animFrameId = useRef<number | null>(null);
  const isVisible = useRef<boolean>(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d', { alpha: true });
    }

    // IntersectionObserver to pause loop when out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting && !animFrameId.current) {
          animate();
        }
      },
      { threshold: 0.05 }
    );

    if (canvasContainerRef.current) {
      observer.observe(canvasContainerRef.current);
    }

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      observer.disconnect();
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [theme]);

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      particles.current = [];
      const isMobile = window.innerWidth < 768;
      // Cap devicePixelRatio to 1.5 max to prevent high-DPI canvas performance lag
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvasContainerRef.current.getBoundingClientRect();
      
      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;
      canvasRef.current.style.width = `${rect.width}px`;
      canvasRef.current.style.height = `${rect.height}px`;
      context.current.scale(dpr, dpr);

      // Reduce particle count on mobile screens (max 18 on mobile)
      const count = isMobile ? Math.min(quantity, 18) : quantity;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const size = Math.random() * 1.8 + 1;
        const dx = (Math.random() - 0.5) * (isMobile ? 0.4 : 0.6);
        const dy = (Math.random() - 0.5) * (isMobile ? 0.4 : 0.6);
        const alpha = Math.random() * 0.4 + 0.2;
        particles.current.push({ x, y, size, dx, dy, alpha, initialAlpha: alpha });
      }
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const animate = () => {
    if (!isVisible.current) {
      animFrameId.current = null;
      return;
    }

    if (!canvasRef.current || !context.current || !canvasContainerRef.current) return;
    
    const rect = canvasContainerRef.current.getBoundingClientRect();
    const ctx = context.current;
    const isMobile = window.innerWidth < 768;
    const maxLineDist = isMobile ? 80 : 100;
    const mouseRadius = isMobile ? 100 : 140;

    ctx.clearRect(0, 0, rect.width, rect.height);

    const isDark = theme === 'dark';
    const particleColor = isDark ? '139, 92, 246' : '109, 40, 217'; // Primary Purple RGB
    const accentColor = isDark ? '59, 130, 246' : '37, 99, 235'; // Blue RGB

    const pCount = particles.current.length;

    for (let i = 0; i < pCount; i++) {
      const p = particles.current[i];

      // Update position
      p.x += p.dx;
      p.y += p.dy;

      // Bounce on edges
      if (p.x < 0 || p.x > rect.width) p.dx *= -1;
      if (p.y < 0 || p.y > rect.height) p.dy *= -1;

      // Mouse proximity interaction (desktop & active touch)
      if (mouse.current.x > 0) {
        const dxMouse = p.x - mouse.current.x;
        const dyMouse = p.y - mouse.current.y;
        const mouseDistSq = dxMouse * dxMouse + dyMouse * dyMouse;
        const mouseRadiusSq = mouseRadius * mouseRadius;

        if (mouseDistSq < mouseRadiusSq) {
          const mouseDist = Math.sqrt(mouseDistSq);
          p.alpha = Math.min(0.9, p.initialAlpha + (1 - mouseDist / mouseRadius) * 0.5);
          
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(${accentColor}, ${(1 - mouseDist / mouseRadius) * (isDark ? 0.2 : 0.12)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        } else {
          p.alpha = p.initialAlpha;
        }
      }

      // Draw particle dot (Without hardware-heavy shadowBlur)
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
      ctx.fill();

      // Draw lines between nearby particles
      for (let j = i + 1; j < pCount; j++) {
        const p2 = particles.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxLineDist * maxLineDist) {
          const dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineAlpha = (1 - dist / maxLineDist) * (isMobile ? 0.1 : 0.14);
          ctx.strokeStyle = `rgba(${particleColor}, ${lineAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animFrameId.current = requestAnimationFrame(animate);
  };

  return (
    <div ref={canvasContainerRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full transform-gpu" />
    </div>
  );
};

export default ParticlesBackground;
