import React, { useState, useEffect } from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const leftCards = [
        { img: "featureimg1.jpg", video: "cover.mp4", title: "Punto Pago - The First Super-App in Latin America" },
        { img: "featureimg2.jpg", video: "cover_2.mp4", title: "Riyadh - Official website of Riyadh, Saudi Arabia's capital" },
        { img: "featureimg3.jpg", video: "cover_3.mp4", title: "Qvino - Wine marketplace with interactive learning" },
        { img: "featureimglft4.jpg", video: "cover_4.mp4", title: "Potion - Sales tool for increasing conversions" },
        { img: "featureleft5.jpg", video: "cover(4).mp4", title: "Ferrumpipe - Galvanized steel metal frame manufacturer" },
    ];

    const rightCards = [
        { img: "featureimgrht1.jpg", video: "cover_5.mp4", title: "Flipaclip - The best tool for stop-motion animation" },
        { img: "frtright2.jpg", video: "cover(1).mp4", title: "Zelt - Run HR, IT & Finance in one place" },
        { img: "frtright3.jpg", video: "cover(2).mp4", title: "Cisco - Cloud based network management" },
        { img: "frtrright4.jpg", video: "cover(3).mp4", title: "Magma - The ultimate tool for building in the Web3 era" },
    ];

    return (
        <div className="feature-section">
            <div className="featureheader">
                <h2>Featured</h2>
                <div className="videofeature">
                    <div className="videoplay2">
                        <video src="src/components/videos/header.mp4" autoPlay loop muted></video>
                    </div>
                    <h3 className="fethead4"><span>projects</span></h3>
                </div>
            </div>

            <div className="feature-images">
                <div className="feature-imagesleft">
                    {leftCards.map((card, index) => (
                        <FeatureCard
                            key={index}
                            img={card.img}
                            video={card.video}
                            title={card.title}
                            onHover={setIsHovering}
                        />
                    ))}
                </div>

                <div className="feature-imagesright">
                    {rightCards.map((card, index) => (
                        <FeatureCard
                            key={index}
                            img={card.img}
                            video={card.video}
                            title={card.title}
                            onHover={setIsHovering}
                        />
                    ))}
                </div>
            </div>

            <div
                className={`custom-cursor ${isHovering ? 'hover' : ''}`}
                style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
            >
                <span>Explore</span>
            </div>
        </div>
    );
};

const FeatureCard = ({ img, video, title, onHover }) => {
    const [hover, setHover] = useState(false);

    const handleHover = (isHovering) => {
        setHover(isHovering);
        onHover(isHovering);
    };

    return (
        <div
            className="feature-card" 
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
        >
            <div className="card-media">
                <img
                    src={`/featureImages/${img}`}
                    alt={title}
                    style={{ opacity: hover ? 0 : 1 }}
                />
                <video
                    src={`/videos/${video}`}
                    autoPlay
                    loop
                    muted
                    style={{ opacity: hover ? 1 : 0 }}
                />
            </div>
            <h4 style={{ color: 'white', fontSize: '26px' }}>{title}</h4>
        </div>
    );
};

export default FeaturedSection;
