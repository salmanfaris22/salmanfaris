import React, { useState, useEffect } from 'react';
import './mouse.css'; // Import your CSS file

const CustomCursor = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [isLarge, setIsLarge] = useState(false);

  const handleMouseMove = (event) => {
    setXPos(event.clientX);
    setYPos(event.clientY);
  };

  const handleMouseOverText = () => {
    setIsLarge(true);
  };

  const handleMouseOutText = () => {
    setIsLarge(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Add event listeners for all text elements
    const textElements = document.querySelectorAll('p, span, a, h1, h2, h3, h4, h5, h6');
    textElements.forEach(element => {
      element.addEventListener('mouseover', handleMouseOverText);
      element.addEventListener('mouseout', handleMouseOutText);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      // Clean up event listeners
      textElements.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOverText);
        element.removeEventListener('mouseout', handleMouseOutText);
      });
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isLarge ? 'large' : ''}`} 
      style={{ left: xPos, top: yPos }}
    >
      {/* Your cursor content here (e.g., an image, text, or SVG) */}
    </div>
  );
};

export default CustomCursor;
