import React from 'react';
import './SectionDua.css';
import project1Image from '../assets/images/project1.png'; // Impor gambar 1
console.log(project1Image);

interface SectionDuaProps {
  id?: string;
}

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  liveUrl: string;
}

const ProjectCard: React.FC<Project> = ({ imageUrl, title, description, liveUrl }) => {
  return (
    <div className="project-card simple-card">
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-button">
          Lihat Proyek →
        </a>
      </div>
    </div>
  );
};

const SectionDua: React.FC<SectionDuaProps> = ({ id }) => {
  const projectsData = [
    {
      imageUrl: project1Image,
      title: 'AI Learning Lab Website',
      description: 'Proyek lucu',
      liveUrl: 'https://project-satu.com',
    },
    {
      imageUrl: '/images/project2.jpg',
      title: 'Geprek Bu Yeni Website',
      description: 'Deskripsi singkat proyek dua.',
      liveUrl: 'https://project-dua.com',
    },
    {
      imageUrl: '/images/project3.jpg',
      title: 'E-Commerce Website',
      description: 'Deskripsi singkat proyek tiga.',
      liveUrl: 'https://project-tiga.com',
    },
    // Tambahkan data proyek lainnya sesuai kebutuhan
  ];

  return (
    <div id={id} className="section-dua simple-layout">
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionDua;