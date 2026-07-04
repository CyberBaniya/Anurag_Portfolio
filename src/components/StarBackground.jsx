import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    createStars();
    createMeteors();

    const handleResize = () => {
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createStars = () => {
    const count = Math.min(
      180,
      Math.floor((window.innerWidth * window.innerHeight) / 16000)
    );

    const generatedStars = [];

    for (let i = 0; i < count; i++) {
      generatedStars.push({
        id: i,
       size: Math.random() * 2.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
      });
    }

    setStars(generatedStars);
  };

  const createMeteors = () => {
    const generatedMeteors = [];

    for (let i = 0; i < 5; i++) {
      generatedMeteors.push({
        id: i,
        width: Math.random() * 80 + 80,
        x: Math.random() * 100,
        y: Math.random() * 40,
        delay: Math.random() * 12,
        duration: Math.random() * 3 + 4,
      });
    }

    setMeteors(generatedMeteors);
  };

  return (
<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-background via-background to-background">
      {/* Stars */}
      {stars.map((star) => (
        <span
          key={star.id}
         className="absolute rounded-full bg-white animate-pulse will-change-transform"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.width}px`,
            height: "2px",
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};