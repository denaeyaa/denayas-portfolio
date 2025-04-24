import React from 'react';
import './SectionSembilan.css';
import Marquee from 'react-fast-marquee';

interface SectionSembilanProps {
  id?: string;
}

const SectionSembilan: React.FC<SectionSembilanProps> = ({ id }) => {
  return (
    <div id={id} className="section-sembilan">
      <Marquee speed={30} gradient={false}>
        <span className="marquee-text">sysadmin</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text">web developer</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text">data enthusiast</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text">web design</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text">sysadmin</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text">web developer</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text">data enthusiast</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text">web design</span>
      </Marquee>
    </div>
  );
};

export default SectionSembilan;