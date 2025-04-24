import React, { useState, useRef, useEffect, useCallback } from 'react';
import './FloatingNav.css';

interface FloatingNavProps {
  sections: string[];
}

const FloatingNav: React.FC<FloatingNavProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging && !(e.relatedTarget as HTMLElement | null)?.closest('.floating-nav')) {
        setIsOpen(false);
      }
    },
    [isDragging]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    if (navRef.current) {
      navRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    },
    [isDragging, dragOffset, setPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (navRef.current) {
      navRef.current.style.cursor = 'grab';
    }
  }, [isDragging, navRef]);

  const handleClickSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const navStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <div
      ref={navRef}
      className={`floating-nav ${isOpen ? 'open' : ''} ${isDragging ? 'dragging' : ''}`}
      style={navStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="nav-capsule">Navigasi</div> {/* Ini dia tulisannya! */}
      <ul className="nav-links">
        {sections.map((section, index) => (
          <li key={index} onClick={() => handleClickSection(section.toLowerCase().replace(/ /g, '-'))}>
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingNav;