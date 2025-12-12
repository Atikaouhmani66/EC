import React, { useState, useEffect, useRef } from 'react';
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

// Logo 3D (le même que dans Accueil)
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
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div 
                ref={logoRef}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '15px',
                    background: COLORS.FORMATION_ORANGE,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    position: 'relative',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                    transition: 'transform 0.1s ease-out',
                    boxShadow: `
                        0 0 20px rgba(244, 107, 69, 0.5),
                        0 0 40px rgba(244, 107, 69, 0.3),
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
            </div>
        </Link>
    );
};

// Composant pour les cartes de formation
const FormationCard = ({ title, description, price, duration, level, features, icon, isPopular }) => {
    const [hover, setHover] = useState(false);

    return (
        <div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                background: 'rgba(20, 20, 40, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '30px',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                transform: hover ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hover 
                    ? '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(244, 107, 69, 0.3)'
                    : '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
        >
            {isPopular && (
                <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: COLORS.FORMATION_ORANGE,
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8em',
                    fontWeight: 'bold',
                    zIndex: 2
                }}>
                    POPULAIRE
                </div>
            )}

            <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '15px',
                background: COLORS.FORMATION_ORANGE,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '30px',
                transform: hover ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.6s'
            }}>
                {icon}
            </div>

            <h3 style={{
                color: 'white',
                fontSize: '1.5em',
                marginBottom: '15px',
                fontWeight: '700',
                background: COLORS.FORMATION_ORANGE,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>
                {title}
            </h3>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '15px'
            }}>
                <span style={{
                    padding: '3px 10px',
                    background: 'rgba(244, 107, 69, 0.2)',
                    color: '#f46b45',
                    borderRadius: '10px',
                    fontSize: '0.8em',
                    fontWeight: '600'
                }}>
                    {level}
                </span>
                <span style={{
                    padding: '3px 10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    fontSize: '0.8em'
                }}>
                    ⏱️ {duration}
                </span>
            </div>

            <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '20px',
                lineHeight: '1.6',
                fontSize: '0.95em'
            }}>
                {description}
            </p>

            <div style={{
                marginBottom: '25px'
            }}>
                {features.map((feature, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '10px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.9em'
                    }}>
                        <span style={{ color: '#f46b45' }}>✓</span>
                        {feature}
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '25px'
            }}>
                <div>
                    <div style={{
                        fontSize: '0.9em',
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '5px'
                    }}>
                        Prix
                    </div>
                    <div style={{
                        fontSize: '1.8em',
                        fontWeight: 'bold',
                        color: '#f46b45'
                    }}>
                        {price} MAD
                    </div>
                </div>

            </div>
        </div>
    );
};

const Formation = () => {
    const [activeCategory, setActiveCategory] = useState('tous');

    // Données des formations
    const formations = [
        {
            id: 'word',
            category: 'bureautique',
            title: 'Microsoft Word',
            description: 'Maîtrisez Word de A à Z : de la rédaction de documents simples à la création de rapports professionnels complexes.',
            price: '1,200',
            duration: '24 heures',
            level: 'Débutant à Avancé',
            icon: '📝',
            features: [
                'Interface et outils de base',
                'Mise en forme avancée',
                'Tableaux et graphiques',
                'Styles et modèles',
                'Collaboration en ligne',
                'Impression et PDF'
            ]
        },
        {
            id: 'excel',
            category: 'bureautique',
            title: 'Microsoft Excel',
            description: 'Devenez expert en analyse de données avec Excel. Formules, tableaux croisés dynamiques, macros et bien plus.',
            price: '1,500',
            duration: '30 heures',
            level: 'Intermédiaire à Expert',
            icon: '📊',
            features: [
                'Formules et fonctions essentielles',
                'Tableaux croisés dynamiques',
                'Graphiques professionnels',
                'Macros et automatisation',
                'Analyse de données',
                'Tableaux de bord'
            ],
            isPopular: true
        },
        {
            id: 'info',
            category: 'bureautique',
            title: 'Informatique de Base',
            description: 'Apprenez les fondamentaux de l\'informatique : système d\'exploitation, internet, sécurité et productivité.',
            price: '800',
            duration: '20 heures',
            level: 'Débutant',
            icon: '💻',
            features: [
                'Windows/Mac OS',
                'Navigation internet',
                'Gestion des fichiers',
                'Sécurité informatique',
                'Outils de productivité',
                'Résolution de problèmes'
            ]
        },
        {
            id: 'francais',
            category: 'langues',
            title: 'Français',
            description: 'Améliorez votre français à l\'écrit et à l\'oral. Grammaire, conjugaison, expression écrite et communication.',
            price: '900',
            duration: '25 heures',
            level: 'Tous niveaux',
            icon: '🇫🇷',
            features: [
                'Grammaire et orthographe',
                'Conjugaison complète',
                'Expression écrite',
                'Communication orale',
                'Vocabulaire professionnel',
                'Préparation aux examens'
            ]
        },
        {
            id: 'anglais',
            category: 'langues',
            title: 'Anglais',
            description: 'Développez vos compétences en anglais pour le travail, les voyages ou les études. Cours adaptés à votre niveau.',
            price: '1,000',
            duration: '28 heures',
            level: 'Tous niveaux',
            icon: '🇬🇧',
            features: [
                'Grammaire anglaise',
                'Vocabulaire thématique',
                'Conversation pratique',
                'Compréhension écrite/orale',
                'Anglais des affaires',
                'Préparation TOEFL/IELTS'
            ],
            isPopular: true
        },
        {
            id: 'etude',
            category: 'scolaire',
            title: 'Soutien Scolaire',
            description: 'Accompagnement personnalisé pour les élèves du primaire au lycée. Toutes matières, toutes filières.',
            price: '700',
            duration: 'Par séance',
            level: 'Primaire - Lycée',
            icon: '🎓',
            features: [
                'Mathématiques',
                'Physique-Chimie',
                'Sciences de la vie',
                'Langues étrangères',
                'Histoire-Géographie',
                'Préparation aux examens'
            ]
        }
    ];

    // Filtrer les formations par catégorie
    const filteredFormations = activeCategory === 'tous' 
        ? formations 
        : formations.filter(f => f.category === activeCategory);

    return (
        <div style={{
            minHeight: '200vh',
            background: COLORS.BG_DARK,
            color: 'white',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            width: '100vw',
            margin: 0,
            padding: 0,
            overflowX: 'hidden'
        }}>
            {/* Header */}
            <header style={{
                padding: '20px 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(15, 15, 35, 0.9)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 1000
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
                            fontSize: '1.8em',
                            fontWeight: '800',
                            background: COLORS.FORMATION_ORANGE,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            ESCODEVE FORMATION
                        </h1>
                        <p style={{
                            margin: '5px 0 0 0',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '0.9em',
                            fontWeight: '500'
                        }}>
                            Expertise • Pédagogie • Excellence
                        </p>
                    </div>
                </div>

                <nav style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <Link to="/" style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontWeight: '600',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        transition: 'all 0.3s'
                    }}>
                        ← Accueil
                    </Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section style={{
                padding: '100px 5%',
                textAlign: 'center',
                background: `linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(244, 107, 69, 0.1))`,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5em, 5vw, 4em)',
                        fontWeight: '900',
                        marginBottom: '30px',
                        background: COLORS.FORMATION_ORANGE,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: '1.2'
                    }}>
                        Transformez vos compétences, 
                        <br />
                        <span style={{ color: 'white' }}>Boostez votre carrière</span>
                    </h1>
                    
                    <p style={{
                        fontSize: '1.3em',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '40px',
                        lineHeight: '1.6',
                        maxWidth: '700px',
                        margin: '0 auto 40px'
                    }}>
                        Des formations pratiques et adaptées à vos besoins. 
                        Bureautique, langues ou soutien scolaire, nous avons 
                        la solution pour votre évolution.
                    </p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                        marginBottom: '60px'
                    }}>
                        {['tous', 'bureautique', 'langues', 'scolaire'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '12px 25px',
                                    background: activeCategory === cat 
                                        ? COLORS.FORMATION_ORANGE 
                                        : 'rgba(255, 255, 255, 0.1)',
                                    color: activeCategory === cat ? 'white' : 'rgba(255, 255, 255, 0.8)',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                {cat === 'tous' && '📚 Toutes les formations'}
                                {cat === 'bureautique' && '💻 Bureautique'}
                                {cat === 'langues' && '🗣️ Langues'}
                                {cat === 'scolaire' && '🎓 Scolaire'}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formations Section */}
            <section style={{
                padding: '80px 5%',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 2fr))',
                    gap: '30px',
                    marginBottom: '60px'
                }}>
                    {filteredFormations.map((formation) => (
                        <FormationCard
                            key={formation.id}
                            {...formation}
                        />
                    ))}
                </div>

                {/* Avantages */}
                <div style={{
                    background: 'rgba(20, 20, 40, 0.5)',
                    borderRadius: '20px',
                    padding: '50px',
                    textAlign: 'center',
                    border: '1px solid rgba(244, 107, 69, 0.2)'
                }}>
                    <h2 style={{
                        fontSize: '2.5em',
                        fontWeight: '800',
                        marginBottom: '40px',
                        color: 'white'
                    }}>
                        Pourquoi choisir nos formations ?
                    </h2>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}>
                        {[
                            {
                                icon: '👨‍🏫',
                                title: 'Formateurs Experts',
                                desc: 'Des professionnels expérimentés dans leur domaine'
                            },
                            {
                                icon: '📱',
                                title: 'Flexibilité',
                                desc: 'Cours en présentiel ou à distance selon vos besoins'
                            },
                            {
                                icon: '📄',
                                title: 'Certification',
                                desc: 'Attestation de formation reconnue'
                            },
                            {
                                icon: '👥',
                                title: 'Petits Groupes',
                                desc: 'Effectifs réduits pour un suivi personnalisé'
                            }
                        ].map((avantage, index) => (
                            <div key={index} style={{
                                padding: '30px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '15px',
                                transition: 'all 0.3s'
                            }}>
                                <div style={{
                                    fontSize: '3em',
                                    marginBottom: '20px'
                                }}>
                                    {avantage.icon}
                                </div>
                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.3em',
                                    marginBottom: '15px'
                                }}>
                                    {avantage.title}
                                </h3>
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    lineHeight: '1.6'
                                }}>
                                    {avantage.desc}
                                </p>
                            </div>
                        ))}
                    </div>
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
            {/* Footer */}
    <footer>
            <div style={{
                textAlign: 'center',
                paddingTop: '30px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.9em'
            }}>
                <p>© 2025 ESCODEVE FORMATION. Tous droits réservés.</p>
            </div>

    </footer>

            {/* Styles CSS */}
            <style>{`
                @keyframes gradientFlow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                button:hover, a:hover {
                    opacity: 0.9;
                    transform: translateY(-2px);
                }
                
                ::-webkit-scrollbar {
                    width: 10px;
                }
                
                ::-webkit-scrollbar-track {
                    background: rgba(15, 15, 35, 0.8);
                }
                
                ::-webkit-scrollbar-thumb {
                    background: ${COLORS.FORMATION_ORANGE};
                    border-radius: 5px;
                }
                
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
};

export default Formation;