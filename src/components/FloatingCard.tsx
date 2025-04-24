import React from 'react';
import './FloatingCard.css';

interface FloatingCardProps {
  imageUrl: string;
  text: string;
  style?: React.CSSProperties;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ imageUrl, text, style }) => {
  return (
    <div className="floating-card" style={style}>
      <div className="floating-card-image-container">
        <img src={imageUrl} alt="Floating Avatar" className="floating-card-image" />
      </div>
      <p className="floating-card-text">{text}</p>
    </div>
  );
};

export default FloatingCard;