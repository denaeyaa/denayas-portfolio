import React from 'react';
import './SectionDelapan.css';
import Marquee from 'react-fast-marquee';

interface SectionDelapanProps {
  id?: string;
}

const SectionDelapan: React.FC<SectionDelapanProps> = ({ id }) => {
  return (
    <div id={id} className="section-delapan">
      <Marquee speed={30} gradient={false} direction="right">
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

export default SectionDelapan;