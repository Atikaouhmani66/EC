import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Les Couleurs dialna avec gradients premium
const COLORS = {
    DEV_BLUE: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    SPORT_GREEN: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    FORMATION_ORANGE: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
    NEON_PURPLE: 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)',
    CYAN: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
    SUNSET: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)',
    TEXT_DARK: '#1a1a2e',
    BG_DARK: '#0f0f23'
};

// Composant Logo avec effet 3D
const Logo3D = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const logoRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (logoRef.current) {
                const rect = logoRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
                setMousePosition({ x, y });
            }
        };

        const logo = logoRef.current;
        if (logo) {
            logo.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (logo) {
                logo.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div 
            ref={logoRef}
            style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: COLORS.DEV_BLUE,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '28px',
                position: 'relative',
                cursor: 'pointer',
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out',
                boxShadow: `
                    0 0 20px rgba(102, 126, 234, 0.5),
                    0 0 40px rgba(102, 126, 234, 0.3),
                    inset 0 0 20px rgba(255, 255, 255, 0.2)
                `
            }}
        >
            <span style={{
                transform: 'translateZ(20px)',
                textShadow: '0 2px 10px rgba(255, 255, 255, 0.3)'
            }}>
                EC
            </span>
            {/* Effet de brillance */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                opacity: 0.5,
                borderRadius: '20px'
            }}></div>
        </div>
    );
};

// Particle System Avancé avec interactions
const AdvancedParticleBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0, radius: 100 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
                this.waveOffset = Math.random() * Math.PI * 2;
                this.originalSize = this.size;
            }

            update() {
                // Effet de vague
                this.x += this.speedX + Math.sin(time * 0.01 + this.waveOffset) * 0.5;
                this.y += this.speedY + Math.cos(time * 0.01 + this.waveOffset) * 0.5;

                // Réaction à la souris
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouseRef.current.radius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
                    this.x -= Math.cos(angle) * force * 10;
                    this.y -= Math.sin(angle) * force * 10;
                    this.size = this.originalSize * 2;
                } else {
                    this.size = this.originalSize;
                }

                // Rebond sur les bords
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();

                // Effet de glow
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 15;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 5000));
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(102, 126, 234, ${0.3 * (1 - distance/120)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const drawMouseEffect = () => {
            if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
                const gradient = ctx.createRadialGradient(
                    mouseRef.current.x, mouseRef.current.y, 0,
                    mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius
                );
                gradient.addColorStop(0, 'rgba(102, 126, 234, 0.3)');
                gradient.addColorStop(1, 'rgba(102, 126, 234, 0)');
                
                ctx.beginPath();
                ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            time++;
            drawMouseEffect();
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            
            // Effet de scanline
            ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
            for (let i = 0; i < canvas.height; i += 20) {
                ctx.fillRect(0, (i + time % 20), canvas.width, 1);
            }

            animationId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

// Service Card Holographique
const HolographicCard = ({ title, description, link, gradient, icon, index }) => {
    const [glitch, setGlitch] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        if (hover) {
            const interval = setInterval(() => {
                if (Math.random() > 0.7) {
                    setGlitch(true);
                    setTimeout(() => setGlitch(false), 100);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [hover]);

    return (
        <div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
                setHover(false);
                setGlitch(false);
            }}
            style={{
                flex: '1',
                minWidth: '320px',
                maxWidth: '420px',
                padding: '40px',
                background: 'rgba(20, 20, 40, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.3),
                    0 0 40px ${hover ? 'rgba(102, 126, 234, 0.3)' : 'transparent'}
                `,
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                transform: hover ? `translateY(-20px) rotateZ(${index * 0.5}deg)` : 'translateY(0) rotateZ(0deg)',
                animation: `floatCard ${3 + index}s ease-in-out infinite`
            }}
        >
            {/* Effet de bordure holographique */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '24px',
                padding: '2px',
                background: gradient,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: hover ? 1 : 0.7,
                transition: 'opacity 0.3s'
            }}></div>

            {/* Effet glitch */}
            {glitch && (
                <>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '2px',
                        right: 0,
                        height: '100%',
                        background: 'rgba(255, 0, 0, 0.1)',
                        mixBlendMode: 'screen',
                        clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 20%)'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '40%',
                        left: '-2px',
                        right: 0,
                        height: '10%',
                        background: 'rgba(0, 255, 255, 0.1)',
                        mixBlendMode: 'screen'
                    }}></div>
                </>
            )}

            {/* Icon 3D */}
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                fontSize: '36px',
                transform: hover ? 'scale(1.1) rotateY(180deg)' : 'scale(1) rotateY(0deg)',
                transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '40px',
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                }}>
                    {icon}
                </div>
            </div>

            {/* Titre avec effet néon */}
            <h3 style={{
                color: 'white',
                marginBottom: '20px',
                fontSize: '1.8em',
                fontWeight: '800',
                textShadow: hover ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
                transition: 'text-shadow 0.3s',
                background: gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>
                {title}
            </h3>

            {/* Description avec effet de typewriter au hover */}
            <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '30px',
                lineHeight: '1.8',
                fontSize: '1.1em',
                opacity: hover ? 1 : 0.9,
                transition: 'opacity 0.3s'
            }}>
                {description}
            </p>

            {/* Bouton avec effet laser */}
            <Link 
                to={link}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '15px',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1em',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s'
                }}
            >
                <span>Explorer le service</span>
                <div style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s',
                    transform: hover ? 'translateX(10px) rotate(90deg)' : 'translateX(0) rotate(0)'
                }}>
                    ➤
                </div>
                
                {/* Effet laser */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transition: 'left 0.5s'
                }}></div>
            </Link>

            {/* Points holographiques flottants */}
            {[...Array(5)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: gradient,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: hover ? 0.8 : 0,
                    transform: hover ? 'scale(1)' : 'scale(0)',
                    transition: `opacity 0.3s ${i * 0.1}s, transform 0.3s ${i * 0.1}s`,
                    boxShadow: '0 0 10px currentColor'
                }}></div>
            ))}
        </div>
    );
};

// Composant de texte avec effet de frappe
const TypewriterText = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }
        }, 50 + Math.random() * 30);

        return () => clearTimeout(timeout);
    }, [currentIndex, text]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span style={{ position: 'relative' }}>
            {displayedText}
            <span style={{
                opacity: showCursor ? 1 : 0,
                color: '#667eea',
                fontWeight: 'bold',
                marginLeft: '2px'
            }}>
                ▋
            </span>
        </span>
    );
};

const Accueil = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.pageYOffset / totalScroll) * 100;
            setScrollProgress(currentProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            minHeight: '200vh',
            background: COLORS.BG_DARK,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}>
            {/* Background avancé */}
            <AdvancedParticleBackground />

            {/* Effets cosmiques */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(29, 209, 161, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)`,
                zIndex: 0
            }}></div>

            {/* Barre de progression cosmique */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #667eea, #38ef7d, #f46b45)',
                transform: `scaleX(${scrollProgress / 100})`,
                transformOrigin: 'left',
                transition: 'transform 0.1s',
                zIndex: 9999,
                boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)'
            }}></div>

            {/* Header avec effet de parallaxe */}
            <header style={{
                padding: '20px 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(15, 15, 35, 0.8)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <Logo3D />
                    <div>
                        <h1 style={{
                            margin: 0,
                            fontSize: '2em',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #667eea, #38ef7d, #f46b45)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'gradientFlow 3s ease infinite',
                            backgroundSize: '200% 200%'
                        }}>
                            ESCODEVE
                        </h1>
                        <p style={{
                            margin: '5px 0 0 0',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '0.9em',
                            fontWeight: '500',
                            letterSpacing: '2px'
                        }}>
                            <TypewriterText text="INNOVATION • EXCELLENCE • FUTURE" />
                        </p>
                    </div>
                </div>
            </header>

            {/* Hero Section avec effet de parallaxe - 100% largeur */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                position: 'relative',
                overflow: 'hidden',
                width: '100vw',
                marginLeft: 'calc(-0vw + 0%)'
            }}>
                {/* Étoiles animées */}
                {[...Array(50)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        background: 'white',
                        borderRadius: '50%',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
                        opacity: Math.random() * 0.8 + 0.2
                    }}></div>
                ))}

                <div style={{
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                    padding: '0 20px'
                }}>
                    {/* Titre principal avec effet de dégradé animé */}
                    <h1 style={{
                        fontSize: 'clamp(3em, 8vw, 6em)',
                        marginBottom: '30px',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        background: 'linear-gradient(135deg, #667eea 0%, #38ef7d 50%, #f46b45 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'gradientFlow 6s ease infinite',
                        backgroundSize: '400% 400%',
                        textShadow: '0 0 60px rgba(102, 126, 234, 0.3)'
                    }}>
                        <div>RÉINVENTER</div>
                        <div style={{ 
                            margin: '20px 0',
                            fontSize: '1.2em',
                            animationDelay: '0.5s'
                        }}>
                            VOTRE <span style={{ color: 'white' }}>AVENIR</span>
                        </div>
                        <div>DÈS AUJOURD'HUI</div>
                    </h1>

                    {/* Sous-titre */}
                    <p style={{
                        fontSize: 'clamp(1.2em, 3vw, 1.8em)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '60px',
                        lineHeight: '1.6',
                        maxWidth: '800px',
                        margin: '0 auto 60px',
                        fontWeight: '300',
                        letterSpacing: '1px'
                    }}>
                        Nous fusionnons <span style={{ 
                            background: COLORS.DEV_BLUE,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '600'
                        }}>technologie</span>,{' '}
                        <span style={{ 
                            background: COLORS.SPORT_GREEN,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '600'
                        }}>bien-être</span> et{' '}
                        <span style={{ 
                            background: COLORS.FORMATION_ORANGE,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '600'
                        }}>formation</span> pour créer
                        <br />l'écosystème parfait de votre réussite.
                    </p>
                </div>
            </section>

            {/* Services Section - 100% largeur */}
            <section style={{
                padding: '150px 0',
                position: 'relative',
                zIndex: 1,
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                background: 'rgba(15, 15, 35, 0.7)'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '100px',
                    position: 'relative',
                    padding: '0 20px'
                }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '10px 30px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        borderRadius: '50px',
                        marginBottom: '20px',
                        border: '1px solid rgba(102, 126, 234, 0.3)'
                    }}>
                        <span style={{
                            color: '#667eea',
                            fontWeight: '600',
                            letterSpacing: '3px',
                            fontSize: '0.9em'
                        }}>
                            NOS DOMAINES D'EXCELLENCE
                        </span>
                    </div>
                    
                    <h2 style={{
                        fontSize: 'clamp(2.5em, 6vw, 4em)',
                        fontWeight: '800',
                        marginBottom: '30px',
                        background: 'linear-gradient(135deg, #fff 0%, #667eea 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        L'ÉCOSYSTÈME <span style={{ color: '#38ef7d' }}>COMPLET</span>
                        <br />
                        DE VOTRE RÉUSSITE
                    </h2>
                    
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '1.3em',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.8',
                        fontWeight: '300'
                    }}>
                        Trois piliers interconnectés pour transformer vos ambitions en réalité tangible.
                    </p>
                </div>

                {/* Grille de cartes holographiques */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '50px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    <HolographicCard
                        index={0}
                        title="DÉVELOPPEMENT IMMERSIF"
                        description="Solutions web et mobiles révolutionnaires avec réalité augmentée, intelligence artificielle et expériences utilisateur inédites."
                        link="/dev"
                        gradient={COLORS.DEV_BLUE}
                        icon="🚀"
                    />
                    
                    <HolographicCard
                        index={1}
                        title="BIEN-ÊTRE QUANTIQUE"
                        description="Programmes de fitness intelligents, coaching par IA et technologies de récupération avancées pour une santé optimale."
                        link="/sport"
                        gradient={COLORS.SPORT_GREEN}
                        icon="💫"
                    />
                    
                    <HolographicCard
                        index={2}
                        title="FORMATION HOLOGRAPHIQUE"
                        description="Acquérir des compétences révolutionnaires grâce à nos programmes de formation avancés en développement et technologies émergentes."
                        link="/formation"
                        gradient={COLORS.FORMATION_ORANGE}
                        icon="🧠"
                    />
                </div>

                {/* Effet de connexion entre les cartes */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #667eea, #38ef7d, #f46b45, transparent)',
                    opacity: 0.3,
                    zIndex: 0
                }}></div>
            </section>

            {/* Footer Cyberpunk */}
            <footer style={{
                padding: '80px 5% 40px',
                background: 'rgba(10, 10, 25, 0.95)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(102, 126, 234, 0.3)',
                position: 'relative',
                zIndex: 1,
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '60px',
                        flexWrap: 'wrap',
                        gap: '40px'
                    }}>
                        <div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '20px'
                            }}>
                                <Logo3D />
                                <h3 style={{
                                    fontSize: '2.5em',
                                    fontWeight: '900',
                                    background: 'linear-gradient(135deg, #667eea, #38ef7d)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    ESCODEVE
                                </h3>
                            </div>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                maxWidth: '400px',
                                lineHeight: '1.8',
                                fontSize: '1.1em'
                            }}>
                                Réinventer l'avenir grâce à la fusion parfaite entre technologie, 
                                bien-être et connaissance. Depuis 2025.
                            </p>
                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    </div>

                    {/* Ligne de séparation futuriste */}
                    <div style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #667eea, #38ef7d, #f46b45, transparent)',
                        margin: '40px 0',
                        opacity: 0.5
                    }}></div>

                    <div style={{
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '0.9em',
                        letterSpacing: '1px'
                    }}>
                        <p>© 2025 ESCODEVE — Tous droits réservés. Système holographique v3.14</p>
                        <p style={{ marginTop: '10px', fontSize: '0.8em' }}>
                            Conçu avec 🌀 dans la matrice digitale
                        </p>
                    </div>
                </div>

                {/* Effets de particules en fond de footer */}
                {[...Array(20)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        background: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
                        borderRadius: '50%',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
                        opacity: 0.3
                    }}></div>
                ))}
            </footer>

            {/* Styles CSS pour toutes les animations */}
            <style>{`
                @keyframes gradientFlow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes portalSpin {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                @keyframes slowRotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                
                @keyframes floatCard {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                }
                
                @keyframes floatStat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 1; }
                }
                
                @keyframes scrollIndicator {
                    0%, 100% { transform: translateY(0); opacity: 0.2; }
                    50% { transform: translateY(10px); opacity: 1; }
                }
                
                @keyframes pulseNeon {
                    0%, 100% { box-shadow: 0 0 30px rgba(102, 126, 234, 0.4); }
                    50% { box-shadow: 0 0 60px rgba(102, 126, 234, 0.8); }
                }
                
                @keyframes pulseGlow {
                    0%, 100% { 
                        box-shadow: 0 20px 50px rgba(102, 126, 234, 0.4),
                                    0 0 60px rgba(102, 126, 234, 0.3); 
                    }
                    50% { 
                        box-shadow: 0 20px 80px rgba(102, 126, 234, 0.6),
                                    0 0 100px rgba(102, 126, 234, 0.5); 
                    }
                }
                
                /* Effets de hover avancés */
                a:hover div {
                    transform: translateX(100%);
                }
                
                footer > div > div > div > div:hover {
                    transform: translateY(-5px) scale(1.1);
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                }
                
                footer > div > div > div > div:hover > div {
                    opacity: 1;
                }
                
                /* Scrollbar personnalisée */
                ::-webkit-scrollbar {
                    width: 10px;
                }
                
                ::-webkit-scrollbar-track {
                    background: rgba(15, 15, 35, 0.8);
                }
                
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #667eea, #38ef7d);
                    border-radius: 5px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(135deg, #764ba2, #f46b45);
                }
                
                /* Effets de sélection */
                ::selection {
                    background: rgba(102, 126, 234, 0.3);
                    color: white;
                }
                
                /* Smooth scrolling */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
};

export default Accueil;