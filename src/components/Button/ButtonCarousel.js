import React from 'react';

export default function ButtonCarousel({ children, classNameButton, onClick }) {
  return (
    <div className="slider-arrow-custom">
      <button
        className={`slider-button ${classNameButton ? classNameButton : ''}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
