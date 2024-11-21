import React, { useState, useEffect } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
      {/* Outer glow effect */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108, 114, 126, 0.5) 0%, rgba(108, 114, 126, 0) 70%)', // Color #6C727E with transparency
          filter: 'blur(100px)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
      {/* Inner solid effect */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '1px',
          height: '1px',
          borderRadius: '50%',
          backgroundColor: '#6C727E', // Solid color for inner circle
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
        }}
      />
    </>
  );
};

export default CursorEffect;
