"use client";

import { useEffect, useRef } from "react";

// Create a simple, elegant particle network matching the indigo/dark theme
export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full window size safely within the client
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    
    // Resize with debouncing
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setSize();
        init(); // Re-initialize particles to distribute evenly
      }, 200);
    };
    window.addEventListener("resize", handleResize);

    // Particle settings
    const particlesArray: Particle[] = [];
    const getParticleCount = () => Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 100);
    
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120, // Interaction radius
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        // Bounce off edges gracefully
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Mouse interaction (repel)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // Push away
            this.x -= forceDirectionX * force * 2.5;
            this.y -= forceDirectionY * force * 2.5;
          }
        }
        
        // Return to base slowly if not near mouse
        // Uncomment below to have a tighter mesh that resists moving too far
        /*
        this.x += (this.baseX - this.x) * 0.05;
        this.y += (this.baseY - this.y) * 0.05;
        this.baseX += this.directionX;
        this.baseY += this.directionY;
        */

        // Continuous simple movement
        this.x += this.directionX;
        this.y += this.directionY;
        
        this.draw();
      }
    }

    function init() {
      if (!canvas) return;
      particlesArray.length = 0;
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        const size = (Math.random() * 2) + 0.5;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2; // Slow drift
        const directionY = (Math.random() * 0.4) - 0.2;
        const color = "rgba(99, 102, 241, 0.4)"; // Subtle indigo
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy;

          // Approx 150px connection radius (150^2 = 22500)
          if (distance < 22500) {
            opacityValue = 1 - distance / 22500;
            if (ctx) {
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacityValue * 0.25})`; 
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
        }
        connect();
      }
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none opacity-40 bg-gray-950"
    />
  );
}
