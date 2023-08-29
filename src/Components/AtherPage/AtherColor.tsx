// src/ColorChanger.tsx
import React, { useState } from 'react';

const ColorChanger: React.FC = () => {
  const colors = ['#FF5733', '#16A085', '#3498DB', '#E74C3C', '#8E44AD'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeColor = () => {
    const newIndex = (currentIndex + 1) % colors.length;
    setCurrentIndex(newIndex);
    document.body.style.backgroundColor = colors[newIndex];
  };

  return (
    <div className="container">
      <div className="icon" onClick={changeColor}>
        <i className="fas fa-paint-brush"></i>
      </div>
    </div>
  );
};

export default ColorChanger;
