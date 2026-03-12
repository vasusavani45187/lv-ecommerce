import React, { useEffect, useState } from 'react';

const Hero = ({ scrollTargetRef }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleExploreClick = () => {
    if (scrollTargetRef?.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const section = document.getElementById('product-section');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage:
          "url('https://wallpapers.com/images/hd/louis-vuitton-4k-wu6zpnk2n1qynfj9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1.5s ease-in-out',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '40px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          maxWidth: '700px',
          width: '90%',
          color: '#FFD700',
        }}
      >
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Louis Vuitton
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            textAlign: 'center',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          }}
        >
          Elevate your style with timeless luxury. Discover iconic fashion crafted to
          perfection.
        </p>
        <button
          onClick={handleExploreClick}
          style={{
            padding: '12px 28px',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
        >
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
