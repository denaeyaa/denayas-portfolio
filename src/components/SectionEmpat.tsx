/*import React from 'react';
import './SectionEmpat.css';

interface SectionEmpatProps {
  id?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const SectionEmpat: React.FC<SectionEmpatProps> = ({ id }) => {
  return (
    <div id={id} className="section-empat">
      <div className="project-card-container">
        <ProjectCard title="Proyek 1" description="Deskripsi proyek 1." />
        <ProjectCard title="Proyek 2" description="Deskripsi proyek 2." />
        <ProjectCard title="Proyek 3" description="Deskripsi proyek 3." />
        <ProjectCard title="Proyek 4" description="Deskripsi proyek 4." />
        <ProjectCard title="Proyek 5" description="Deskripsi proyek 5." />
        <ProjectCard title="Proyek 6" description="Deskripsi proyek 6." />
        <ProjectCard title="Proyek 7" description="Deskripsi proyek 7." />
      </div>
    </div>
  );
};

export default SectionEmpat;*/


import React, { useRef } from 'react';
import './SectionEmpat.css';
import projectAImage from '../assets/images/project1.png';
import projectBImage from '../assets/images/project1.png';
import projectCImage from '../assets/images/project1.png';
import projectDImage from '../assets/images/project1.png';
import projectEImage from '../assets/images/project1.png';
import projectFImage from '../assets/images/project1.png';
import projectGImage from '../assets/images/project1.png';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import ikon panah

interface SectionEmpatProps {
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
    <div className="project-card small-card">
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

const SectionEmpat: React.FC<SectionEmpatProps> = ({ id }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const smallProjectsData = [
    { imageUrl: projectAImage, title: 'Proyek A', description: 'Deskripsi A', liveUrl: '#' },
    { imageUrl: projectBImage, title: 'Proyek B', description: 'Deskripsi B', liveUrl: '#' },
    { imageUrl: projectCImage, title: 'Proyek C', description: 'Deskripsi C', liveUrl: '#' },
    { imageUrl: projectDImage, title: 'Proyek D', description: 'Deskripsi D', liveUrl: '#' },
    { imageUrl: projectEImage, title: 'Proyek E', description: 'Deskripsi E', liveUrl: '#' },
    { imageUrl: projectFImage, title: 'Proyek F', description: 'Deskripsi F', liveUrl: '#' },
    { imageUrl: projectGImage, title: 'Proyek G', description: 'Deskripsi G', liveUrl: '#' },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' }); // Sesuaikan nilai geser
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' }); // Sesuaikan nilai geser
    }
  };

  return (
    <div id={id} className="section-empat small-layout">
      <div ref={sliderRef} className="projects-container slider-container no-scrollbar">
        {smallProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="slider-navigation">
        <button className="nav-button left-arrow" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <button className="nav-button right-arrow" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SectionEmpat;


/*import React from 'react';
import './SectionEmpat.css';
import projectAImage from '../assets/images/project1.png';
import projectBImage from '../assets/images/project1.png';
import projectCImage from '../assets/images/project1.png';
import projectDImage from '../assets/images/project1.png';
import projectEImage from '../assets/images/project1.png';
import projectFImage from '../assets/images/project1.png';
import projectGImage from '../assets/images/project1.png';

interface SectionEmpatProps {
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
    <div className="project-card small-card">
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

const SectionEmpat: React.FC<SectionEmpatProps> = ({ id }) => {
  const smallProjectsData = [
    { imageUrl: projectAImage, title: 'Proyek A', description: 'Deskripsi A', liveUrl: '#' },
    { imageUrl: projectBImage, title: 'Proyek B', description: 'Deskripsi B', liveUrl: '#' },
    { imageUrl: projectCImage, title: 'Proyek C', description: 'Deskripsi C', liveUrl: '#' },
    { imageUrl: projectDImage, title: 'Proyek D', description: 'Deskripsi D', liveUrl: '#' },
    { imageUrl: projectEImage, title: 'Proyek E', description: 'Deskripsi E', liveUrl: '#' },
    { imageUrl: projectFImage, title: 'Proyek F', description: 'Deskripsi F', liveUrl: '#' },
    { imageUrl: projectGImage, title: 'Proyek G', description: 'Deskripsi G', liveUrl: '#' },
  ];

  return (
    <div id={id} className="section-empat small-layout">
      <div className="projects-container slider-container">
        {smallProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionEmpat;*/