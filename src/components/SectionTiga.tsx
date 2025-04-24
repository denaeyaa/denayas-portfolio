import React from 'react';
import './SectionTiga.css';
import Marquee from 'react-fast-marquee';

interface SectionTigaProps {
  id?: string;
}

const SectionTiga: React.FC<SectionTigaProps> = ({ id }) => {
  return (
    <div id={id} className="section-tiga">
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

export default SectionTiga;