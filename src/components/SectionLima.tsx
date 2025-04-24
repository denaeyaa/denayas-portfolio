import React, { useState, useRef } from 'react';
import './SectionLima.css';
import { FaSearchPlus, FaDownload } from 'react-icons/fa';
import CVImage from '../assets/images/project1.png'; // Pastikan ini path yang benar

interface SectionLimaProps {
  id?: string;
}

const SectionLima: React.FC<SectionLimaProps> = ({ id }) => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [zoomLevel, setZoomLevel] = useState(1); // Level zoom awal adalah 1 (ukuran normal)
  const maxZoom = 3; // Level zoom maksimum
  const zoomIncrement = 0.5; // Besaran peningkatan zoom setiap klik
  const cvAspectRatio = 210 / 297; // Aspect ratio standar A4

  const handleZoom = () => {
    setZoomLevel((prevLevel) => {
      const nextLevel = Math.min(prevLevel + zoomIncrement, maxZoom);
      return nextLevel === prevLevel ? 1 : nextLevel; // Kembali ke 1 jika sudah max
    });

    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transform = `scale(${zoomLevel})`;
      imageWrapperRef.current.style.transformOrigin = 'center center';
      imageWrapperRef.current.style.transition = 'transform 0.3s ease-in-out';
    }
  };

  // Ganti dengan URL share publik file CV kamu di Google Drive
  const cvDownloadUrl = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';

  return (
    <div id={id} className="section-lima cv-section">
      <div className="preview-container cv-preview" style={{ aspectRatio: cvAspectRatio }}>
        <div ref={imageWrapperRef} className="image-wrapper">
          <img
            src={CVImage}
            alt="Preview CV"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease-in-out',
              objectFit: 'cover', // Atau 'contain', sesuai preferensi
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className="overlay" onClick={handleZoom}>
          <FaSearchPlus />
        </div>
      </div>
      <div className="download-info">
        <p className="lorem-ipsum"><b>Download my CV if you interest with me ^^</b></p>
        <a href={cvDownloadUrl} className="download-button" target="_blank" rel="noopener noreferrer">
          <FaDownload /> Download File
        </a>
      </div>
    </div>
  );
};

export default SectionLima;