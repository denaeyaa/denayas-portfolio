import React from 'react';
import './App.css';
import Home from './components/Home';
import SectionDua from './components/SectionDua';
import SectionEmpat from './components/SectionEmpat';
import SectionLima from './components/SectionLima';
import SectionEnam from './components/SectionEnam';
import SectionTujuh from './components/SectionTujuh';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav'; // Import FloatingNav
import SectionDelapan from './components/SectionDelapan';
import SectionSembilan from './components/SectionSembilan';

function App() {
    const sectionNames = ['Home', 'Project', 'Skills', 'Minipro', 'CV', 'Module', 'Certificate']; // Nama section untuk navigasi
  
  return (
    <>
      <FloatingNav sections={sectionNames} /> {/* Tambahkan FloatingNav di sini */}
      <Home id="home" />
      <SectionDua id="project" />
      <SectionEmpat id="minipro" />
      <SectionDelapan />
      <SectionSembilan />
      <SectionEnam id="module" />
      <SectionTujuh id="certificate" />
      <SectionLima id="cv" />
      <Footer />
    </>
  );
}

export default App;