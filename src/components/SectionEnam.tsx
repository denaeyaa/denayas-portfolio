import React from 'react';
import './SectionEnam.css';
import moduleImage from '../assets/images/project1.png'; // Ganti dengan gambar modul yang sesuai
import { FaEye } from 'react-icons/fa';

interface SectionEnamProps {
  id?: string;
}

interface Module {
  title: string;
  driveUrl: string;
  imageUrl: string;
}

const ModuleCard: React.FC<Module> = ({ title, driveUrl, imageUrl }) => {
  return (
    <div className="module-card">
      <div className="module-info">
        <h3 className="module-title">{title}</h3>
        <a href={driveUrl} className="module-button" target="_blank" rel="noopener noreferrer">
          <FaEye /> Show File
        </a>
      </div>
      <div className="module-image-container">
        <img src={imageUrl} alt={title} className="module-image" />
      </div>
    </div>
  );
};

const SectionEnam: React.FC<SectionEnamProps> = ({ id }) => {
  const modulesData = [
    {
      title: 'Modul 1: Pengantar Pemrograman',
      driveUrl: 'https://drive.google.com/uc?export=view&id=YOUR_MODULE_1_ID', // Ganti dengan URL share modul 1
      imageUrl: moduleImage,
    },
    {
      title: 'Modul 2: Struktur Data dan Algoritma',
      driveUrl: 'https://drive.google.com/uc?export=view&id=YOUR_MODULE_2_ID', // Ganti dengan URL share modul 2
      imageUrl: moduleImage,
    },
    {
      title: 'Modul 3: Pemrograman Berorientasi Objek',
      driveUrl: 'https://drive.google.com/uc?export=view&id=YOUR_MODULE_3_ID', // Ganti dengan ID modul 3
      imageUrl: moduleImage,
    },
    // Tambahkan data modul lainnya di sini
  ];

  return (
    <div id={id} className="section-enam">
      <div className="modules-container">
        {modulesData.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </div>
  );
};

export default SectionEnam;