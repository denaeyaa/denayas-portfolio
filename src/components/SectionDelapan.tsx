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
        <span className="marquee-text" style={{color: 'black'}}>sysadmin</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text" style={{color: 'black'}}>web developer</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text" style={{color: 'black'}}>data enthusiast</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text" style={{color: 'black'}}>web design</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text" style={{color: 'black'}}>sysadmin</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text" style={{color: 'black'}}>web developer</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text" style={{color: 'black'}}>data enthusiast</span>
        <span className="marquee-space">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="marquee-text" style={{color: 'black'}}>web design</span>
      </Marquee>
    </div>
  );
};

export default SectionDelapan;