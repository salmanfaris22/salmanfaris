import React, { useState, useEffect } from 'react';
import './mouse.css'; // Import your CSS file

const CustomCursor = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleMouseMove = (event) => {
    setXPos(event.clientX);
    setYPos(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: xPos, top: yPos }}>
      {/* Your cursor content here (e.g., an image, text, or SVG) */}
    </div>
  );
};

export default CustomCursor;
