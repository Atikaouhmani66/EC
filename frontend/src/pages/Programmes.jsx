import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Programmes = () => {
    const navigate = useNavigate();
    const [selectedGender, setSelectedGender] = useState('women');

    const programmesFemmes = [
        {
            id: 1,
            titre: "Fitness & Tonification",
            niveau: "Débutant à Avancé",
            duree: "8 semaines",
            objectifs: ["Perte de poids", "Tonification", "Endurance"],
            description: "Programme complet pour sculpter votre silhouette et améliorer votre condition physique.",
            seances: [
                "Lundi : Cardio & Abdominaux",
                "Mardi : Bas du corps",
                "Mercredi : Yoga & Étirements",
                "Jeudi : Haut du corps",
                "Vendredi : Circuit training",
                "Samedi : Marche active",
                "Dimanche : Repos"
            ],
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "💃"
        },
        {
            id: 2,
            titre: "Prénatal & Postnatal",
            niveau: "Spécial",
            duree: "Adaptable",
            objectifs: ["Préparation à l'accouchement", "Récupération", "Renforcement en douceur"],
            description: "Programme adapté aux femmes enceintes et jeunes mamans, encadré par des coachs spécialisés.",
            seances: [
                "Gymnastique douce",
                "Pilates prénatal",
                "Exercices de respiration",
                "Rééducation périnéale",
                "Marche thérapeutique"
            ],
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "🤰"
        },
        {
            id: 3,
            titre: "Défense Personnelle Féminine",
            niveau: "Tous niveaux",
            duree: "12 semaines",
            objectifs: ["Confiance en soi", "Auto-défense", "Condition physique"],
            description: "Apprenez les techniques de base pour vous protéger tout en améliorant votre condition physique.",
            seances: [
                "Techniques de base",
                "Mises en situation",
                "Condition physique spécifique",
                "Travail mental",
                "Simulations"
            ],
            image: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "🥋"
        },
        {
            id: 4,
            titre: "Yoga & Méditation",
            niveau: "Débutant à Expert",
            duree: "Illimité",
            objectifs: ["Flexibilité", "Gestion du stress", "Équilibre mental"],
            description: "Programme de yoga adapté aux femmes, combinant postures, respiration et méditation.",
            seances: [
                "Yoga Vinyasa",
                "Yin Yoga",
                "Méditation guidée",
                "Pranayama",
                "Yoga restauratif"
            ],
            image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "🧘‍♀️"
        }
    ];

    const programmesHommes = [
        {
            id: 1,
            titre: "Musculation Intensive",
            niveau: "Intermédiaire à Expert",
            duree: "12 semaines",
            objectifs: ["Prise de masse", "Force", "Définition"],
            description: "Programme de musculation avancé pour développer votre masse musculaire et votre force.",
            seances: [
                "Lundi : Pecs & Triceps",
                "Mardi : Dos & Biceps",
                "Mercredi : Jambes",
                "Jeudi : Épaules",
                "Vendredi : Full body",
                "Samedi : Cardio",
                "Dimanche : Repos"
            ],
            image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "💪"
        },
        {
            id: 2,
            titre: "CrossFit & Functional Training",
            niveau: "Débutant à Avancé",
            duree: "8 semaines",
            objectifs: ["Endurance", "Puissance", "Condition complète"],
            description: "Entraînement fonctionnel intensif pour améliorer toutes les capacités physiques.",
            seances: [
                "WOD quotidiens",
                "Travail technique",
                "Cardio haute intensité",
                "Force et puissance",
                "Mobilité"
            ],
            image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "⚡"
        },
        {
            id: 3,
            titre: "Préparation Sportive",
            niveau: "Tous niveaux",
            duree: "Adaptable",
            objectifs: ["Performance", "Vitesse", "Agilité"],
            description: "Programme spécifique pour améliorer vos performances dans votre sport favori.",
            seances: [
                "Travail de vitesse",
                "Plyométrie",
                "Renforcement spécifique",
                "Cardio ciblé",
                "Récupération active"
            ],
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "🏃‍♂️"
        },
        {
            id: 4,
            titre: "Perte de Poids Homme",
            niveau: "Débutant à Avancé",
            duree: "16 semaines",
            objectifs: ["Perte de graisse", "Maintien musculaire", "Santé cardio"],
            description: "Programme combinant cardio, musculation et nutrition pour une perte de poids efficace.",
            seances: [
                "Cardio fractionné",
                "Circuit training",
                "Musculation légère",
                "Marche rapide",
                "Étirements"
            ],
            image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icone: "⚖️"
        }
    ];

    const programmes = selectedGender === 'women' ? programmesFemmes : programmesHommes;

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0f0f23',
            color: '#fff',
            fontFamily: 'Arial, sans-serif',
            width: '100vw',
            margin: 0,
            padding: 0,
            overflowX: 'hidden'
        }}>
            {/* Hero Section - Pleine largeur */}
            <section 
                style={{
                    width: '100vw',
                    minHeight: '70vh',
                    background: selectedGender === 'women' 
                        ? 'linear-gradient(rgba(15, 15, 35, 0.85), rgba(15, 15, 35, 0.9)), url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
                        : 'linear-gradient(rgba(15, 15, 35, 0.85), rgba(15, 15, 35, 0.9)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '80px 5%',
                    textAlign: 'center',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'
                }}
            >
                <div style={{
                    width: '100%',
                    maxWidth: '1400px'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(3em, 8vw, 5em)',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        background: 'linear-gradient(45deg, #10b981, #059669)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '30px',
                        lineHeight: '1.1'
                    }}>
                        Programmes d'Entraînement
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2em, 3vw, 1.8em)',
                        color: 'rgba(255, 255, 255, 0.95)',
                        margin: '0 auto 50px',
                        lineHeight: '1.6',
                        maxWidth: '1000px'
                    }}>
                        Des programmes personnalisés adaptés à vos objectifs, avec des séances non-mixtes pour plus de confort.
                    </p>

                    {/* Boutons de sélection - Pleine largeur */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '40px',
                        marginBottom: '40px',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            onClick={() => setSelectedGender('women')}
                            style={{
                                background: selectedGender === 'women' 
                                    ? 'linear-gradient(45deg, #ec4899, #db2777)' 
                                    : 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                border: 'none',
                                padding: '25px 50px',
                                fontSize: '1.3em',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                minWidth: '300px',
                                justifyContent: 'center',
                                boxShadow: selectedGender === 'women' 
                                    ? '0 15px 40px rgba(236, 72, 153, 0.5)' 
                                    : 'none'
                            }}
                        >
                            <span style={{ fontSize: '2em' }}>👩</span>
                            Programmes Femmes
                        </button>

                        <button
                            onClick={() => setSelectedGender('men')}
                            style={{
                                background: selectedGender === 'men' 
                                    ? 'linear-gradient(45deg, #3b82f6, #1d4ed8)' 
                                    : 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                border: 'none',
                                padding: '25px 50px',
                                fontSize: '1.3em',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                minWidth: '300px',
                                justifyContent: 'center',
                                boxShadow: selectedGender === 'men' 
                                    ? '0 15px 40px rgba(59, 130, 246, 0.5)' 
                                    : 'none'
                            }}
                        >
                            <span style={{ fontSize: '2em' }}>👨</span>
                            Programmes Hommes
                        </button>
                    </div>
                </div>
            </section>

            {/* Section Programmes - Pleine largeur */}
            <section style={{
                width: '100vw',
                padding: '100px 5%',
                background: selectedGender === 'women' ? '#0a0a1a' : '#0f0f23',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1600px',
                    margin: '0 auto'
                }}>
                    <header style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '80px',
                        flexWrap: 'wrap',
                        gap: '30px'
                    }}>
                        <div>
                            <h2 style={{
                                fontSize: 'clamp(2.5em, 6vw, 4em)',
                                color: selectedGender === 'women' ? '#ec4899' : '#3b82f6',
                                margin: 0,
                                fontWeight: '800'
                            }}>
                                {selectedGender === 'women' ? 'Programmes Femmes' : 'Programmes Hommes'}
                            </h2>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                marginTop: '15px',
                                fontSize: '1.3em'
                            }}>
                                Séances non-mixtes • Coachs spécialisés • Horaires flexibles
                            </p>
                        </div>
                        <div style={{
                            background: selectedGender === 'women' 
                                ? 'rgba(236, 72, 153, 0.1)' 
                                : 'rgba(59, 130, 246, 0.1)',
                            padding: '20px 40px',
                            borderRadius: '15px',
                            border: selectedGender === 'women' 
                                ? '2px solid rgba(236, 72, 153, 0.4)' 
                                : '2px solid rgba(59, 130, 246, 0.4)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <span style={{
                                color: selectedGender === 'women' ? '#ec4899' : '#3b82f6',
                                fontWeight: 'bold',
                                fontSize: '1.2em'
                            }}>
                                {selectedGender === 'women' ? '👩 Zone Réservée aux Femmes' : '👨 Zone Réservée aux Hommes'}
                            </span>
                        </div>
                    </header>

                    {/* Grille des programmes - Grille 4 colonnes sur grands écrans */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                        gap: '50px',
                        width: '100%'
                    }}>
                        {programmes.map((programme) => (
                            <div key={programme.id} style={{
                                background: 'rgba(25, 25, 45, 0.9)',
                                borderRadius: '25px',
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                border: `2px solid ${selectedGender === 'women' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backdropFilter: 'blur(10px)'
                            }}>
                                {/* Image en haute qualité */}
                                <div style={{
                                    width: '100%',
                                    height: '300px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img 
                                        src={programme.image} 
                                        alt={programme.titre}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '25px',
                                        right: '25px',
                                        background: selectedGender === 'women' 
                                            ? 'rgba(236, 72, 153, 0.95)' 
                                            : 'rgba(59, 130, 246, 0.95)',
                                        color: 'white',
                                        padding: '12px 20px',
                                        borderRadius: '25px',
                                        fontSize: '1em',
                                        fontWeight: 'bold',
                                        backdropFilter: 'blur(10px)'
                                    }}>
                                        {programme.niveau}
                                    </div>
                                </div>

                                {/* Contenu du programme */}
                                <div style={{
                                    padding: '40px',
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <span style={{
                                            fontSize: '2.5em',
                                            marginRight: '20px'
                                        }}>
                                            {programme.icone}
                                        </span>
                                        <h3 style={{
                                            fontSize: '1.8em',
                                            color: '#fff',
                                            margin: 0,
                                            flexGrow: 1,
                                            fontWeight: '700'
                                        }}>
                                            {programme.titre}
                                        </h3>
                                    </div>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        lineHeight: '1.7',
                                        marginBottom: '25px',
                                        flexGrow: 1,
                                        fontSize: '1.1em'
                                    }}>
                                        {programme.description}
                                    </p>

                                    <div style={{
                                        marginBottom: '25px'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                            marginBottom: '15px'
                                        }}>
                                            <span style={{
                                                color: selectedGender === 'women' ? '#ec4899' : '#3b82f6',
                                                fontSize: '1.3em'
                                            }}>
                                                📅
                                            </span>
                                            <span style={{
                                                color: 'rgba(255, 255, 255, 0.95)',
                                                fontWeight: 'bold',
                                                fontSize: '1.1em'
                                            }}>
                                                Durée : {programme.duree}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{
                                                color: selectedGender === 'women' ? '#ec4899' : '#3b82f6',
                                                marginRight: '15px',
                                                fontSize: '1.3em'
                                            }}>
                                                🎯
                                            </span>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                {programme.objectifs.map((objectif, index) => (
                                                    <span key={index} style={{
                                                        background: selectedGender === 'women' 
                                                            ? 'rgba(236, 72, 153, 0.15)' 
                                                            : 'rgba(59, 130, 246, 0.15)',
                                                        color: selectedGender === 'women' ? '#ec4899' : '#3b82f6',
                                                        padding: '8px 15px',
                                                        borderRadius: '8px',
                                                        fontSize: '0.95em',
                                                        fontWeight: '600',
                                                        border: `1px solid ${selectedGender === 'women' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                                                    }}>
                                                        {objectif}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{
                                        marginTop: 'auto'
                                    }}>
                                        <button style={{
                                            background: selectedGender === 'women' 
                                                ? 'linear-gradient(45deg, #ec4899, #db2777)' 
                                                : 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                                            color: 'white',
                                            border: 'none',
                                            padding: '18px 35px',
                                            fontSize: '1.1em',
                                            fontWeight: 'bold',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            width: '100%',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1.5px'
                                        }}
                                        onClick={() => navigate(`/programme/${programme.id}/${selectedGender}`)}>
                                            Détails du Programme
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Horaires - Pleine largeur */}
            <section style={{
                width: '100vw',
                padding: '100px 5%',
                background: '#0a0a1a',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5em, 6vw, 3.5em)',
                        color: '#10b981',
                        textAlign: 'center',
                        marginBottom: '80px',
                        fontWeight: '800'
                    }}>
                        Horaires des Séances Non-Mixtes
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                        gap: '50px'
                    }}>
                        {/* Horaires Femmes */}
                        <div style={{
                            background: 'rgba(236, 72, 153, 0.1)',
                            padding: '50px',
                            borderRadius: '20px',
                            border: '2px solid rgba(236, 72, 153, 0.4)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '40px'
                            }}>
                                <span style={{ fontSize: '3em' }}>👩</span>
                                <h3 style={{
                                    fontSize: '2.2em',
                                    color: '#ec4899',
                                    margin: 0,
                                    fontWeight: '700'
                                }}>
                                    Séances Femmes
                                </h3>
                            </div>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ 
                                    marginBottom: '20px', 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#ec4899', fontSize: '1.1em' }}>Lundi-Vendredi:</strong> 8h-12h • 16h-20h
                                </li>
                                <li style={{ 
                                    marginBottom: '20px', 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#ec4899', fontSize: '1.1em' }}>Samedi:</strong> 9h-13h • 15h-18h
                                </li>
                                <li style={{ 
                                    marginBottom: '20px', 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#ec4899', fontSize: '1.1em' }}>Dimanche:</strong> 10h-14h
                                </li>
                                <li style={{ 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#ec4899', fontSize: '1.1em' }}>Yoga femmes:</strong> Mardi/Jeudi 18h-19h
                                </li>
                            </ul>
                        </div>

                        {/* Horaires Hommes */}
                        <div style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            padding: '50px',
                            borderRadius: '20px',
                            border: '2px solid rgba(59, 130, 246, 0.4)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '40px'
                            }}>
                                <span style={{ fontSize: '3em' }}>👨</span>
                                <h3 style={{
                                    fontSize: '2.2em',
                                    color: '#3b82f6',
                                    margin: 0,
                                    fontWeight: '700'
                                }}>
                                    Séances Hommes
                                </h3>
                            </div>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ 
                                    marginBottom: '20px', 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#3b82f6', fontSize: '1.1em' }}>Lundi-Vendredi:</strong> 6h-10h • 12h-16h • 20h-23h
                                </li>
                                <li style={{ 
                                    marginBottom: '20px', 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#3b82f6', fontSize: '1.1em' }}>Samedi:</strong> 7h-12h • 14h-20h
                                </li>
                                <li style={{ 
                                    marginBottom: '20px', 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#3b82f6', fontSize: '1.1em' }}>Dimanche:</strong> 8h-16h
                                </li>
                                <li style={{ 
                                    padding: '15px 20px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    borderRadius: '10px',
                                    fontSize: '1.1em'
                                }}>
                                    <strong style={{ color: '#3b82f6', fontSize: '1.1em' }}>CrossFit:</strong> Lundi/Mercredi/Vendredi 19h-21h
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Retour à l'accueil - Pleine largeur */}
            <section style={{ 
                width: '100vw',
                textAlign: 'center', 
                padding: '80px 5%',
                background: '#0f0f23',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw'
            }}>
                <div style={{ 
                    width: '100%',
                    maxWidth: '1200px', 
                    margin: '0 auto' 
                }}>
                    <p style={{
                        fontSize: '1.5em',
                        color: 'rgba(255, 255, 255, 0.95)',
                        lineHeight: '1.8',
                        marginBottom: '40px',
                        maxWidth: '800px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Retournez à l'accueil pour explorer toutes nos sections.
                    </p>
                    
                    <a 
                        href="/"
                        style={{
                            display: 'inline-block',
                            padding: '20px 50px',
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '15px',
                            fontSize: '1.3em',
                            fontWeight: '700',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)',
                            minWidth: '300px'
                        }}
                    >
                        🏠 Retour à l'accueil
                    </a>
                </div>
            </section>

            {/* Styles CSS pour la largeur complète */}
            <style>{`
                /* Reset pour largeur complète */
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                html, body {
                    width: 100%;
                    overflow-x: hidden;
                    margin: 0;
                    padding: 0;
                }
                
                /* Assurer que tout prend 100% de largeur */
                section {
                    box-sizing: border-box;
                }
                
                /* Améliorations responsive */
                @media (max-width: 1200px) {
                    .programme-grid {
                        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)) !important;
                    }
                    
                    .horaire-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .gender-buttons {
                        flex-direction: column;
                        gap: 20px !important;
                    }
                    
                    .gender-buttons button {
                        min-width: 100% !important;
                        width: 100%;
                    }
                    
                    .programme-grid {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                    
                    .programme-header {
                        flex-direction: column !important;
                        text-align: center !important;
                        gap: 20px !important;
                    }
                    
                    .horaire-card {
                        padding: 30px !important;
                    }
                    
                    .retour-accueil {
                        min-width: 100% !important;
                    }
                    
                    h1 {
                        font-size: 2.5em !important;
                    }
                    
                    h2 {
                        font-size: 2em !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .programme-card {
                        min-width: 100% !important;
                    }
                    
                    .objectifs {
                        flex-direction: column !important;
                    }
                    
                    .objectifs span {
                        width: 100%;
                        text-align: center;
                    }
                }
                
                /* Animations */
                button, a {
                    transition: all 0.3s ease !important;
                }
                
                button:hover, a:hover {
                    transform: translateY(-3px);
                }
                
                .programme-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3) !important;
                }
            `}</style>
        </div>
    );
};

export default Programmes;