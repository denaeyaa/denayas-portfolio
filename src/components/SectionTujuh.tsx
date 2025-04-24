//import certificate3 from '../assets/images/project1.png';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionTujuh.css';
import certificate1 from '../assets/images/project1.png'; // Ganti path sesuai
import certificate2 from '../assets/images/project1.png';
import certificate3 from '../assets/images/project1.png';
import certificate4 from '../assets/images/project1.png';
import certificate5 from '../assets/images/project1.png';
import certificate6 from '../assets/images/project1.png';
import certificate7 from '../assets/images/project1.png';

interface SectionTujuhProps {
  id?: string;
}

interface Certificate {
  imageUrl: string;
}

const CertificateCard: React.FC<Certificate> = ({ imageUrl }) => {
  return (
    <div className="certificate-card-horizontal-image-only">
      <div className="certificate-image-container-horizontal-ratio">
        <img src={imageUrl} alt="Sertifikat" className="certificate-image-horizontal-ratio" />
      </div>
    </div>
  );
};

const SectionTujuh: React.FC<SectionTujuhProps> = ({ id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false, // Tambahkan properti ini
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const certificatesData = [
    { imageUrl: certificate1 },
    { imageUrl: certificate2 },
    { imageUrl: certificate3 },
    { imageUrl: certificate4 },
    { imageUrl: certificate5 },
    { imageUrl: certificate6 },
    { imageUrl: certificate7 },
  ];

  return (
    <div id={id} className="section-tujuh" style={{ backgroundColor: '#210C6E' }}>
      <div className="certificates-container-horizontal">
        <Slider {...settings}>
          {certificatesData.map((certificate, index) => (
            <div key={index} className="certificate-slide-horizontal">
              <CertificateCard {...certificate} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionTujuh;