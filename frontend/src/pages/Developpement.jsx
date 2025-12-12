import React from 'react';

const Dev = () => {
    // Composant pour afficher une équipe avec image
    const TeamWithImage = ({ 
        teamName, 
        emoji, 
        description, 
        color, 
        technologies = [], 
        imageSide = 'right',
        imagePath,
        imageAlt = `Image de l'équipe ${teamName}`
    }) => (
        <div style={{
            display: 'flex',
            flexDirection: imageSide === 'right' ? 'row' : 'row-reverse',
            alignItems: 'center',
            gap: '60px',
            marginBottom: '100px',
            flexWrap: 'wrap',
            width: '100%'
        }}>
            {/* Partie Texte - 50% de la largeur */}
            <div style={{
                flex: '1 1 500px',
                padding: '50px',
                background: `linear-gradient(135deg, ${color}10, rgba(20, 20, 40, 0.9))`,
                borderRadius: '25px',
                border: `1px solid ${color}30`,
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px',
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: imageSide === 'right' ? 'auto' : '30px',
                    left: imageSide === 'right' ? '30px' : 'auto',
                    fontSize: '4em',
                    opacity: 0.1
                }}>
                    {emoji}
                </div>
                
                <h3 style={{
                    fontSize: '2.5em',
                    fontWeight: '800',
                    color: color,
                    marginBottom: '30px',
                    position: 'relative',
                    zIndex: 1,
                    textShadow: `0 0 20px ${color}40`
                }}>
                    {teamName}
                </h3>
                
                <p style={{
                    color: 'rgba(255, 255, 255, 0.95)',
                    lineHeight: '1.8',
                    marginBottom: '40px',
                    fontSize: '1.2em',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {description}
                </p>
                
                {technologies.length > 0 && (
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '15px',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {technologies.map((tech, index) => (
                            <span key={index} style={{
                                background: `${color}20`,
                                color: color,
                                padding: '12px 25px',
                                borderRadius: '30px',
                                fontSize: '1em',
                                fontWeight: '600',
                                border: `2px solid ${color}40`,
                                transition: 'all 0.3s ease'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Partie Image - 50% de la largeur */}
            <div className="team-image-container"
                style={{
                    flex: '1 1 500px',
                    height: '450px',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    border: `3px solid ${color}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: `0 25px 50px rgba(0, 0, 0, 0.4)`,
                    backgroundColor: '#1a1a2e',
                    minWidth: '400px'
                }}
                data-team-color={color}
            >
                {imagePath ? (
                    <>
                        <img 
                            src={imagePath}
                            alt={imageAlt}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                            loading="lazy"
                        />
                        {/* Overlay coloré */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${color}30, transparent)`,
                            opacity: 0.4
                        }}></div>
                        
                        {/* Étiquette de l'image */}
                        <div className="image-label"
                            style={{
                                position: 'absolute',
                                bottom: '30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(0, 0, 0, 0.8)',
                                color: 'white',
                                padding: '15px 35px',
                                borderRadius: '30px',
                                fontSize: '1.1em',
                                backdropFilter: 'blur(15px)',
                                border: `2px solid ${color}60`,
                                fontWeight: '700',
                                transition: 'all 0.4s ease',
                                zIndex: 3,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {teamName}
                        </div>
                    </>
                ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, ${color}20, ${color}40)`,
                        borderRadius: '25px'
                    }}>
                        <span style={{
                            fontSize: '4em',
                            opacity: 0.7,
                            color: color
                        }}>
                            {emoji}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
 
    return (
        <div style={{
            padding: '80px 0 120px',
            minHeight: '100vh',
            background: '#0f0f23',
            color: '#fff',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            width: '100vw',
            overflowX: 'hidden',
            position: 'relative'
        }}>
            {/* Effets de fond */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 60%, rgba(56, 239, 125, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(244, 107, 69, 0.15) 0%, transparent 50%)
                `,
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            {/* Header Section - Pleine largeur */}
            <header style={{
                textAlign: 'center',
                marginBottom: '100px',
                paddingTop: '80px',
                width: '100%',
                position: 'relative',
                zIndex: 1,
                padding: '0 20px'
            }}>
                
                <div style={{
                    display: 'inline-block',
                    padding: '15px 40px',
                    background: 'rgba(102, 126, 234, 0.15)',
                    borderRadius: '50px',
                    marginBottom: '30px',
                    border: '2px solid rgba(102, 126, 234, 0.4)',
                    animation: 'float 3s ease-in-out infinite',
                    backdropFilter: 'blur(10px)'
                }}>
                    <span style={{
                        color: '#667eea',
                        fontWeight: '700',
                        letterSpacing: '3px',
                        fontSize: '1em',
                        textShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
                    }}>
                        💻 DÉVELOPPEMENT EXPERT
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(3em, 8vw, 5em)',
                    fontWeight: '900',
                    marginBottom: '30px',
                    background: 'linear-gradient(135deg, #667eea, #38ef7d, #f46b45)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientFlow 6s ease infinite',
                    backgroundSize: '400% 400%',
                    lineHeight: '1.1',
                    padding: '0 20px'
                }}>
                    Notre Équipe Tech
                </h1>
                
                <p style={{
                    fontSize: 'clamp(1.2em, 3vw, 1.6em)',
                    color: 'rgba(255, 255, 255, 0.95)',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    lineHeight: '1.8',
                    fontWeight: '300',
                    padding: '0 20px'
                }}>
                    Découvrez les spécialistes qui transforment vos idées en solutions digitales performantes
                </p>
            </header>

            {/* Contenu Principal - Conteneur centré mais contenu large */}
            <main style={{
                width: '100%',
                position: 'relative',
                zIndex: 1,
                padding: '0 5%'
            }}>

                {/* Équipe Frontend avec image à DROITE */}
                <TeamWithImage 
                    teamName="Équipe Frontend"
                    emoji="💻"
                    description="Nos experts en développement frontend créent des interfaces utilisateur modernes, intuitives et performantes. Spécialisés dans React, Vue.js et technologies frontend avancées, ils garantissent une expérience utilisateur exceptionnelle sur tous les appareils."
                    color="#667eea"
                    technologies={['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS']}
                    imageSide="right"
                    imagePath="/image/escodeve.jpeg"
                    imageAlt="Équipe Frontend ESCODEVE travaillant sur le développement"
                />

                {/* Équipe Backend avec image à GAUCHE */}
                <TeamWithImage 
                    teamName="Équipe Backend"
                    emoji="🛠️"
                    description="Nos architectes backend conçoivent des systèmes robustes, sécurisés et évolutifs. Experts en Node.js, Python et gestion de bases de données, ils développent les APIs et logiques métier qui alimentent vos applications."
                    color="#38ef7d"
                    technologies={['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker']}
                    imageSide="left"
                    imagePath=""
                    imageAlt="Équipe Backend ESCODEVE travaillant sur l'architecture"
                />

                {/* Équipe RH & Administration avec image à DROITE */}
                <TeamWithImage 
                    teamName="Équipe RH & Administration"
                    emoji="👔"
                    description="Notre équipe administrative assure le bon fonctionnement de notre structure. Gestion des ressources humaines, recrutement des talents, formation continue et support administratif pour maintenir un environnement de travail optimal."
                    color="#f46b45"
                    technologies={['Recrutement', 'Formation', 'Gestion RH', 'Administration', 'Support']}
                    imageSide="right"
                    imagePath=""
                    imageAlt="Équipe RH et Administration ESCODEVE"
                />

                {/* Section Espaces de Travail - Pleine largeur */}
                <section style={{
                    marginTop: '150px',
                    width: '100%'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5em, 6vw, 3.5em)',
                        fontWeight: '800',
                        color: '#fff',
                        marginBottom: '80px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        padding: '0 20px'
                    }}>
                        🏢 Nos Espaces Innovants
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                        gap: '40px',
                        width: '100%',
                        padding: '0 20px'
                    }}>
                        {/* Espace 1: Bureau Principal */}
                        <article style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '25px',
                            padding: '40px',
                            border: '1px solid rgba(102, 126, 234, 0.3)',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.4s ease',
                            height: '100%',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="space-image-container"
                                style={{
                                    width: '100%',
                                    height: '250px',
                                    borderRadius: '20px',
                                    marginBottom: '30px',
                                    border: '3px solid rgba(102, 126, 234, 0.4)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    backgroundColor: '#1a1a2e'
                                }}
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                    alt="Bureau principal ESCODEVE"
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'rgba(0, 0, 0, 0.7)',
                                    color: 'white',
                                    padding: '15px',
                                    textAlign: 'center',
                                    fontSize: '1.1em',
                                    fontWeight: '700',
                                    backdropFilter: 'blur(10px)',
                                    letterSpacing: '1px'
                                }}>
                                    Bureau Principal
                                </div>
                            </div>
                            <h3 style={{
                                fontSize: '1.8em',
                                fontWeight: '700',
                                color: '#667eea',
                                marginBottom: '20px',
                                textShadow: '0 0 15px rgba(102, 126, 234, 0.5)'
                            }}>
                                Bureau Principal
                            </h3>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: '1.7',
                                fontSize: '1.1em'
                            }}>
                                Espace de travail moderne équipé de stations de travail performantes, salles de réunion collaboratives et zones de détente.
                            </p>
                        </article>

                        {/* Espace 2: Salle de Formation */}
                        <article style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '25px',
                            padding: '40px',
                            border: '1px solid rgba(56, 239, 125, 0.3)',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.4s ease',
                            height: '100%',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="space-image-container"
                                style={{
                                    width: '100%',
                                    height: '250px',
                                    borderRadius: '20px',
                                    marginBottom: '30px',
                                    border: '3px solid rgba(56, 239, 125, 0.4)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    backgroundColor: '#1a1a2e'
                                }}
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                    alt="Salle de meeting ESCODEVE"
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'rgba(0, 0, 0, 0.7)',
                                    color: 'white',
                                    padding: '15px',
                                    textAlign: 'center',
                                    fontSize: '1.1em',
                                    fontWeight: '700',
                                    backdropFilter: 'blur(10px)',
                                    letterSpacing: '1px'
                                }}>
                                    Salle de Meeting
                                </div>
                            </div>
                            <h3 style={{
                                fontSize: '1.8em',
                                fontWeight: '700',
                                color: '#38ef7d',
                                marginBottom: '20px',
                                textShadow: '0 0 15px rgba(56, 239, 125, 0.5)'
                            }}>
                                Salle de Meeting
                            </h3>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: '1.7',
                                fontSize: '1.1em'
                            }}>
                                Équipée de matériel pédagogique dernier cri pour workshops, formations techniques et sessions de partage de connaissances.
                            </p>
                        </article>
                    </div>
                </section>

                {/* CTA Final - Pleine largeur */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '150px',
                    padding: '80px 5%',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
                    borderRadius: '30px',
                    border: '2px solid rgba(102, 126, 234, 0.4)',
                    backdropFilter: 'blur(25px)',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%'
                }}>
                    {/* Effet de fond pour le CTA */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at center, rgba(102, 126, 234, 0.25) 0%, transparent 70%)',
                        opacity: 0.5
                    }}></div>
                    
                    <h3 style={{
                        fontSize: 'clamp(2em, 5vw, 3em)',
                        fontWeight: '800',
                        color: '#fff',
                        marginBottom: '30px',
                        position: 'relative',
                        zIndex: 1,
                        textShadow: '0 0 20px rgba(102, 126, 234, 0.5)'
                    }}>
                        🚀 Prêt à concrétiser votre vision ?
                    </h3>
                    
                    <p style={{
                        fontSize: '1.3em',
                        color: 'rgba(255, 255, 255, 0.95)',
                        marginBottom: '40px',
                        lineHeight: '1.8',
                        maxWidth: '800px',
                        margin: '0 auto 40px auto',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        Retournez à l'accueil pour explorer toutes nos sections.
                    </p>
                    
                    {/* Lien vers l'accueil */}
                    <a 
                        href="/"
                        aria-label="Retour à la page d'accueil"
                        style={{
                            display: 'inline-block',
                            padding: '20px 50px',
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '20px',
                            fontSize: '1.3em',
                            fontWeight: '700',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.5)',
                            position: 'relative',
                            zIndex: 1,
                            overflow: 'hidden',
                            border: '2px solid rgba(255, 255, 255, 0.2)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-8px) scale(1.05)';
                            e.target.style.boxShadow = '0 30px 60px rgba(102, 126, 234, 0.7)';
                            e.target.style.background = 'linear-gradient(135deg, #764ba2, #667eea)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.5)';
                            e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                        }}
                    >
                        🏠 Retour à l'accueil
                    </a>
                </div>

            </main>

            {/* Styles CSS complets */}
            <style>{`
                /* =================================== */
                /* ANIMATIONS GÉNÉRALES */
                /* =================================== */
                @keyframes gradientFlow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
                
                /* =================================== */
                /* STYLES AVANCÉS POUR LES IMAGES */
                /* =================================== */
                
                /* Effet Hover pour images d'équipe */
                .team-image-container:hover {
                    transform: scale(1.03) !important;
                    box-shadow: 
                        0 35px 70px rgba(0, 0, 0, 0.5),
                        0 0 0 3px var(--team-color, #667eea) !important;
                }
                
                .team-image-container:hover img {
                    transform: scale(1.1);
                }
                
                .team-image-container:hover .image-label {
                    transform: translateX(-50%) scale(1.15) !important;
                    background: rgba(0, 0, 0, 0.9) !important;
                    border-color: var(--team-color, #667eea) !important;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6) !important;
                    padding: 20px 40px !important;
                }
                
                /* Effet pour espaces de travail */
                .space-image-container:hover {
                    transform: translateY(-15px) !important;
                    box-shadow: 
                        0 30px 60px rgba(0, 0, 0, 0.6),
                        0 0 0 4px rgba(255, 255, 255, 0.15) !important;
                }
                
                .space-image-container:hover img {
                    transform: scale(1.05);
                }
                
                article:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
                }
                
                /* Effet pour badges techno */
                span:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                }
                
                /* =================================== */
                /* RESPONSIVE DESIGN */
                /* =================================== */
                
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                html, body {
                    width: 100%;
                    overflow-x: hidden;
                }
                
                /* Grands écrans */
                @media (min-width: 1600px) {
                    main {
                        padding: 0 10% !important;
                    }
                    
                    .team-image-container,
                    .team-text-container {
                        flex: 1 1 600px !important;
                    }
                }
                
                /* Tablettes */
                @media (max-width: 1024px) {
                    .team-container {
                        flex-direction: column !important;
                        gap: 40px !important;
                    }
                    
                    .team-image-container,
                    .team-text-container {
                        width: 100% !important;
                        min-width: 100% !important;
                    }
                    
                    .team-image-container {
                        height: 350px !important;
                    }
                    
                    .space-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                
                /* Mobiles */
                @media (max-width: 768px) {
                    main {
                        padding: 0 20px !important;
                    }
                    
                    .team-image-container {
                        height: 300px !important;
                    }
                    
                    .space-grid {
                        grid-template-columns: 1fr !important;
                    }
                    
                    h1 {
                        font-size: 2.5em !important;
                    }
                    
                    h2 {
                        font-size: 2em !important;
                    }
                    
                    .team-text {
                        padding: 30px !important;
                    }
                }
                
                /* Très petits mobiles */
                @media (max-width: 480px) {
                    .team-image-container {
                        height: 250px !important;
                    }
                    
                    .tech-badge {
                        padding: 8px 15px !important;
                        font-size: 0.9em !important;
                    }
                    
                    .cta-button {
                        padding: 15px 30px !important;
                        font-size: 1.1em !important;
                    }
                }
                
                /* Support pour reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                    
                    .team-image-container:hover,
                    .space-image-container:hover,
                    article:hover {
                        transform: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Dev;