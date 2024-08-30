import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    mass: number;
    speedX: number;
    speedY: number;
    color: string;
}

interface EnhancedInteractiveBackgroundProps {
    currentSection: number;
}

const EnhancedInteractiveBackground: React.FC<EnhancedInteractiveBackgroundProps> = ({ currentSection }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();

    const colors = ['#FF8700', '#FFB86C', '#FF79C6']; // McLaren orange and complementary colors

    const createParticles = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const particleCount = 200;
        const particles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * 3 + 1; // More variability in size
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: size,
                mass: size, // Mass proportional to size
                speedX: (Math.random() - 0.5) * 2, // Increased speed
                speedY: (Math.random() - 0.5) * 2, // Increased speed
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        particlesRef.current = particles;
    }, []);

    const calculateGravity = (p1: Particle, p2: Particle) => {
        const G = .8; // Gravitational constant (adjust for desired effect)
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const distanceSq = dx * dx + dy * dy;
        const distance = Math.sqrt(distanceSq);

        if (distance < p1.size + p2.size) return { fx: 0, fy: 0 }; // Prevent collision

        const force = G * (p1.mass * p2.mass) / distanceSq;
        const fx = force * dx / distance;
        const fy = force * dy / distance;

        return { fx, fy };
    };

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach((particle, index) => {
            // Apply gravity from other particles
            particlesRef.current.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const { fx, fy } = calculateGravity(particle, otherParticle);
                    particle.speedX += fx / particle.mass;
                    particle.speedY += fy / particle.mass;
                }
            });

            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce off edges with some energy loss
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -0.9;
                particle.x = Math.max(0, Math.min(particle.x, canvas.width));
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -0.9;
                particle.y = Math.max(0, Math.min(particle.y, canvas.height));
            }

            // Mouse gravity effect
            const dx = mouseRef.current.x - particle.x;
            const dy = mouseRef.current.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 60) {
                particle.speedX += dx * 0.001 * particle.mass;
                particle.speedY += dy * 0.001 * particle.mass;
            }

            // Speed limit
            const maxSpeed = 2.5;
            const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
            if (currentSpeed > maxSpeed) {
                particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
                particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
            }

            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });

        // Draw connections
        ctx.strokeStyle = 'rgba(255, 135, 0, 0.1)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particlesRef.current.length; i++) {
            for (let j = i + 1; j < particlesRef.current.length; j++) {
                const dx = particlesRef.current[i].x - particlesRef.current[j].x;
                const dy = particlesRef.current[i].y - particlesRef.current[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
                    ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
                    ctx.stroke();
                }
            }
        }

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [createParticles, animate]);

    useEffect(() => {
        // Section change effect
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.fillStyle = 'rgba(255, 135, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 300);
    }, [currentSection]);

    const handleMouseMove = useCallback((event: MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: -1, background: '#1a202c' }}
        />
    );
};

export default EnhancedInteractiveBackground;