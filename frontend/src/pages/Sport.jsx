import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sport = () => {
    const navigate = useNavigate();

    const equipements = [
        {
            id: 1,
            nom: "Tapis de Course Pro",
            description: "Tapis dernière génération avec inclinaison automatique et monitoring cardiaque",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            nom: "Haltères & Poids",
            description: "Collection complète d'haltères de 2kg à 50kg pour tous les niveaux",
            image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            nom: "Machines de Musculation",
            description: "Machines professionnelles pour travailler tous les groupes musculaires",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
       
       
        {
            id: 5,
            nom: "Matériel de Fitness",
            description: "Ballons, élastiques, tapis, cordes à sauter et accessoires variés",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            nom: "Espace CrossFit",
            description: "Zone dédiée avec matériel spécifique pour le cross-training",
            image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const sectionsSalle = [
        {
            id: 1,
            titre: "Zone Cardio",
            description: "Espace équipé des derniers tapis de course, vélos elliptiques et rameurs",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icone: "🏃"
        },
        {
            id: 2,
            titre: "Zone Musculation",
            description: "Machines guidées et poids libres pour un entraînement complet",
            image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icone: "💪"
        },
        {
            id: 3,
            titre: "Espace Libre",
            description: "Grande surface pour les exercices au sol, étirements et cours collectifs",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icone: "🧘"
        },
        {
            id: 4,
            titre: "Espace Récupération",
            description: "Zone de repos avec sauna et équipements de récupération active",
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            icone: "🛀"
        }
    ];

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
            {/* Hero Section */}
            <section style={{
                width: '100vw',
                minHeight: '90vh',
                background: 'linear-gradient(rgba(15, 15, 35, 0.85), rgba(15, 15, 35, 0.9)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 5%',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    width: '100%'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(3em, 8vw, 5em)',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        background: 'linear-gradient(45deg, #10b981, #059669)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '30px',
                        lineHeight: '1.1'
                    }}>
                        Notre Salle de Sport
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2em, 3vw, 1.8em)',
                        color: 'rgba(255, 255, 255, 0.95)',
                        maxWidth: '900px',
                        margin: '0 auto 40px',
                        lineHeight: '1.6'
                    }}>
                        Un espace moderne et équipé pour votre transformation physique. Découvrez nos installations de haute qualité.
                    </p>
                    
                    <button style={{
                        background: 'linear-gradient(45deg, #10b981, #059669)',
                        color: 'white',
                        border: 'none',
                        padding: '18px 50px',
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
                        marginTop: '20px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px)';
                        e.target.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.4)';
                    }}
                    onClick={() => navigate('/programmes')}>
                        Voir Nos Programmes
                    </button>
                </div>
            </section>

            {/* Présentation des Sections */}
            <section style={{
                width: '100vw',
                padding: '100px 5%',
                background: '#0a0a1a'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2em, 5vw, 3.5em)',
                        color: '#10b981',
                        textAlign: 'center',
                        marginBottom: '80px',
                        position: 'relative',
                        paddingBottom: '20px'
                    }}>
                        Nos Espaces Dédiés
                        <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '150px',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, #10b981, transparent)'
                        }}></span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                        gap: '50px',
                        width: '100%'
                    }}>
                        {sectionsSalle.map((section) => (
                            <div key={section.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '30px',
                                background: 'rgba(20, 20, 40, 0.6)',
                                padding: '40px',
                                borderRadius: '20px',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(10px)';
                                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    flexShrink: 0,
                                    width: '150px',
                                    height: '150px',
                                    overflow: 'hidden',
                                    borderRadius: '15px'
                                }}>
                                    <img 
                                        src={section.image} 
                                        alt={section.titre}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        marginBottom: '15px'
                                    }}>
                                        <span style={{
                                            fontSize: '2.5em'
                                        }}>
                                            {section.icone}
                                        </span>
                                        <h3 style={{
                                            fontSize: '1.8em',
                                            color: '#fff',
                                            margin: 0
                                        }}>
                                            {section.titre}
                                        </h3>
                                    </div>
                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        lineHeight: '1.6',
                                        fontSize: '1.1em'
                                    }}>
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Matériel et Équipements */}
            <section style={{
                width: '100vw',
                padding: '100px 5%',
                background: '#0f0f23'
            }}>
                <div style={{
                    maxWidth: '1600px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2em, 5vw, 3.5em)',
                        color: '#10b981',
                        textAlign: 'center',
                        marginBottom: '80px',
                        position: 'relative',
                        paddingBottom: '20px'
                    }}>
                        Matériel Professionnel
                        <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '200px',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, #10b981, transparent)'
                        }}></span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '30px',
                        width: '100%'
                    }}>
                        {equipements.map((equipement) => (
                            <div key={equipement.id} style={{
                                background: 'rgba(20, 20, 40, 0.8)',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '250px',
                                    overflow: 'hidden'
                                }}>
                                    <img 
                                        src={equipement.image} 
                                        alt={equipement.nom}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                    />
                                </div>
                                <div style={{
                                    padding: '25px'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.5em',
                                        color: '#fff',
                                        marginBottom: '15px',
                                        textAlign: 'center'
                                    }}>
                                        {equipement.nom}
                                    </h3>
                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        lineHeight: '1.6',
                                        textAlign: 'center'
                                    }}>
                                        {equipement.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action pour Programmes */}
            <section style={{
                width: '100vw',
                padding: '120px 5%',
                background: 'linear-gradient(135deg, #0a0a1a 0%, #0f0f23 100%)',
                textAlign: 'center',
                borderTop: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '2.8em',
                        color: '#fff',
                        marginBottom: '30px',
                        background: 'linear-gradient(45deg, #10b981, #059669)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Prêt à Commencer Votre Programme ?
                    </h2>
                    <p style={{
                        fontSize: '1.3em',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '50px',
                        lineHeight: '1.6'
                    }}>
                        Découvrez nos programmes d'entraînement personnalisés adaptés à vos objectifs et votre niveau.
                    </p>
                    <button style={{
                        background: 'linear-gradient(45deg, #10b981, #059669)',
                        color: 'white',
                        border: 'none',
                        padding: '20px 60px',
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        boxShadow: '0 15px 40px rgba(16, 185, 129, 0.5)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.08)';
                        e.target.style.boxShadow = '0 20px 50px rgba(16, 185, 129, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.5)';
                    }}
                    onClick={() => navigate('/programmes')}>
                        Découvrir Nos Programmes
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Sport;