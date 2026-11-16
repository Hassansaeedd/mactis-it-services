import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CityHub {
  name: string;
  lat: number;
  lng: number;
  region: string;
  latency: string;
  status: string;
}

const cityHubs: CityHub[] = [
  { name: 'Lahore (HQ)', lat: 31.5204, lng: 74.3587, region: 'Engineering Hub', latency: '< 15ms', status: 'Primary Dev Center' },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, region: 'Middle East Gateway', latency: '< 28ms', status: 'Active Edge' },
  { name: 'Frankfurt', lat: 50.1109, lng: 8.6821, region: 'EU Central Cluster', latency: '< 38ms', status: 'AWS EU Multi-AZ' },
  { name: 'London', lat: 51.5074, lng: -0.1278, region: 'UK Cloud Hub', latency: '< 42ms', status: 'Active Edge' },
  { name: 'New York', lat: 40.7128, lng: -74.006, region: 'US East Cluster', latency: '< 65ms', status: 'Active Edge' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, region: 'Asia Pacific Edge', latency: '< 48ms', status: 'AWS AP Cluster' },
];

export const GlobalNetwork3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeCity, setActiveCity] = useState<CityHub>(cityHubs[0]);
  const [isDragging, setIsDragging] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0.35, y: 0.8 });
  const velocity = useRef({ x: 0, y: 0.003 });

  // Convert lat/lng to 3D sphere coordinates
  const latLngTo3D = useCallback((lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return {
      x: -(radius * Math.sin(phi) * Math.cos(theta)),
      z: radius * Math.sin(phi) * Math.sin(theta),
      y: radius * Math.cos(phi),
    };
  }, []);

  // 3D Canvas Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 420;
    };
    window.addEventListener('resize', handleResize);

    // Pre-calculate sphere dots (dense latitude/longitude wireframe)
    const dots: { lat: number; lng: number }[] = [];
    for (let lat = -80; lat <= 80; lat += 12) {
      const radiusAtLat = Math.cos((lat * Math.PI) / 180);
      const step = Math.max(12, Math.round(18 / radiusAtLat));
      for (let lng = -180; lng < 180; lng += step) {
        dots.push({ lat, lng });
      }
    }

    let pulseTime = 0;

    const render = () => {
      pulseTime += 0.03;
      if (!isDragging) {
        rotation.current.y += velocity.current.y;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.36;

      const rotX = rotation.current.x;
      const rotY = rotation.current.y;

      // Project 3D point through rotation matrix
      const project = (x3d: number, y3d: number, z3d: number) => {
        // Rotate around Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x3d * cosY + z3d * sinY;
        const z1 = -x3d * sinY + z3d * cosY;

        // Rotate around X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y3d * cosX - z1 * sinX;
        const z2 = y3d * sinX + z1 * cosX;

        // Simple perspective scale
        const fov = 450;
        const scale = fov / (fov + z2);

        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale,
        };
      };

      // Draw faint 3D atmosphere halo
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius * 1.25);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
      grad.addColorStop(0.7, 'rgba(14, 165, 233, 0.03)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Draw Sphere Grid Dots
      dots.forEach((dot) => {
        const p3d = latLngTo3D(dot.lat, dot.lng, radius);
        const p2d = project(p3d.x, p3d.y, p3d.z);

        // Only draw front half or dim back half
        const isFront = p2d.z > -radius * 0.2;
        const alpha = isFront
          ? Math.max(0.1, (p2d.z + radius) / (radius * 2)) * 0.4
          : 0.05;

        ctx.fillStyle = `rgba(186, 230, 253, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p2d.x, p2d.y, isFront ? 1.4 : 0.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Connecting Great Circle Arcs between HQ (Lahore) and other cities
      const hq = cityHubs[0];
      const hq3d = latLngTo3D(hq.lat, hq.lng, radius);

      cityHubs.slice(1).forEach((dest, idx) => {
        const dest3d = latLngTo3D(dest.lat, dest.lng, radius);

        // Draw bezier arc in 3D
        ctx.beginPath();
        const steps = 24;

        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          // Interpolate with elevated midpoint
          const midElevation = 1 + Math.sin(t * Math.PI) * 0.18;
          const ix = (hq3d.x + (dest3d.x - hq3d.x) * t) * midElevation;
          const iy = (hq3d.y + (dest3d.y - hq3d.y) * t) * midElevation;
          const iz = (hq3d.z + (dest3d.z - hq3d.z) * t) * midElevation;

          const pt = project(ix, iy, iz);

          if (s === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }

        ctx.strokeStyle = idx % 2 === 0 ? 'rgba(56, 189, 248, 0.35)' : 'rgba(99, 102, 241, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Animated traveling data pulse particle
        const particleT = (pulseTime * 0.4 + idx * 0.25) % 1;
        const pMid = 1 + Math.sin(particleT * Math.PI) * 0.18;
        const px = (hq3d.x + (dest3d.x - hq3d.x) * particleT) * pMid;
        const py = (hq3d.y + (dest3d.y - hq3d.y) * particleT) * pMid;
        const pz = (hq3d.z + (dest3d.z - hq3d.z) * particleT) * pMid;
        const pPulse = project(px, py, pz);

        if (pPulse.z > -radius * 0.3) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(pPulse.x, pPulse.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw City Hub Markers
      cityHubs.forEach((city) => {
        const c3d = latLngTo3D(city.lat, city.lng, radius);
        const c2d = project(c3d.x, c3d.y, c3d.z);

        // Render if on front side
        if (c2d.z > -radius * 0.15) {
          const isSelected = city.name === activeCity.name;

          // Glowing pulse ring
          const ringRadius = 4 + Math.sin(pulseTime * 3) * 2;
          ctx.strokeStyle = isSelected ? 'rgba(56, 189, 248, 0.9)' : 'rgba(56, 189, 248, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(c2d.x, c2d.y, ringRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Center solid point
          ctx.fillStyle = isSelected ? '#38bdf8' : '#ffffff';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(c2d.x, c2d.y, isSelected ? 4 : 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Text label
          ctx.fillStyle = isSelected ? '#ffffff' : 'rgba(226, 232, 240, 0.75)';
          ctx.font = isSelected ? 'bold 11px sans-serif' : '10px sans-serif';
          ctx.fillText(city.name, c2d.x + 8, c2d.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [latLngTo3D, activeCity, isDragging]);

  // Mouse Drag Interaction Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    mousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - mousePos.current.x;
    const dy = e.clientY - mousePos.current.y;
    rotation.current.y += dx * 0.006;
    rotation.current.x = Math.max(-0.8, Math.min(0.8, rotation.current.x + dy * 0.006));
    mousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md shadow-2xl">
      {/* Top Banner */}
      <div className="pb-6 border-b border-slate-800">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
          Global Cloud Infrastructure
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Worldwide Edge Network & Cloud Clusters
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Explore our low-latency international cloud clusters connecting our global clients.
        </p>
      </div>

      {/* Grid: 3D Interactive Canvas + Node Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-6">
        
        {/* 3D Canvas Column (7 cols) */}
        <div 
          className="lg:col-span-7 relative h-[380px] sm:h-[420px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        {/* City Nodes List Column (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Active Cloud Edge Hubs:
          </span>

          <div className="space-y-2">
            {cityHubs.map((city) => {
              const isSelected = city.name === activeCity.name;
              return (
                <button
                  key={city.name}
                  onClick={() => setActiveCity(city)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-sky-950/50 border-sky-400 text-white shadow-md ring-1 ring-sky-400/30'
                      : 'bg-slate-850/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div>
                    <span className="text-sm font-bold block leading-tight">{city.name}</span>
                    <span className="text-[11px] text-slate-400 font-normal">{city.region}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-extrabold text-sky-400 block font-mono">{city.latency}</span>
                    <span className="text-[10px] text-slate-400">{city.status}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <a
              href={`https://wa.me/923154327855?text=${encodeURIComponent(`Hello! I am interested in cloud hosting and high-availability architecture with Mactis.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-2.5 text-xs font-bold flex items-center justify-center space-x-2"
            >
              <span>Deploy on Mactis Cloud Infrastructure</span>
              <span className="font-bold">→</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GlobalNetwork3D;
