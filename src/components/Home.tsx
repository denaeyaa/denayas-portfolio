import React from 'react';
import './Home.css';
import FloatingCard from '../components/FloatingCard'; // Pastikan path ini benar
import BuletPic from '../assets/images/self.jpg'; // Pastikan path ini benar
import Coretan1 from '../assets/images/drawan.webp'; // Impor gambar coretan 1
import Coretan2 from '../assets/images/drawtu.webp'; // Impor gambar coretan 2 (jika ada lebih dari satu)
import Coretan3 from '../assets/images/drawtri.webp';
import Coretan4 from '../assets/images/drawfor.webp';
import Coretan5 from '../assets/images/drawfaif.webp';

interface HomeProps {
  id?: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <div id={id} className="home-section">
      <h1 className="home-text" style={{ zIndex: 2 }}>HELLO! WELCOME to Denaya's Portfolio Portal</h1> {/* TULISAN INI DI SINI */}
      <FloatingCard
        imageUrl={BuletPic}
        text="nama.eth"
        style={{
          width: '80px',       // Atur lebar card 1
          height: '90px',      // Atur tinggi card 1
          top: '23%',         // Atur posisi vertikal card 1 (coba sesuaikan)
          left: '36%',        // Atur posisi horizontal card 1 (coba sesuaikan)
          transform: 'rotate(-17deg)', // Miringkan card 1 (coba sesuaikan sudutnya)
          marginLeft: '-35px',
         }}
      />

      <FloatingCard
        imageUrl={BuletPic} // Ganti dengan path gambar lain jika ada
        text="username"
        style={{ 
          width: '80px',       // Atur lebar card 2
          height: '90px',      // Atur tinggi card 2
          bottom: '36%',        // Atur posisi vertikal card 2 (coba sesuaikan)
          right: '28%',       // Atur posisi horizontal card 2 (coba sesuaikan)
          transform: 'rotate(15deg)',  // Miringkan card 2
         }}
      />
    </div>
  );
};

export default Home;