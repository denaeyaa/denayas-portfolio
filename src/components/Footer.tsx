import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import ikon yang diperlukan

const Footer: React.FC = () => {
  return (
    <footer className="footer-empat-bagian">
      <div className="footer-section alamat">
        <h3>Alamat</h3>
        <p>Modangan, Kecamatan Nglegok Kabupaten Blitar</p>
      </div>
      <div className="footer-section site">
        <h3>Site</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#certificate">Certificate</a></li>
          <li><a href="#modules">Modules</a></li>
        </ul>
      </div>
      <div className="footer-section sosial">
        <h3>Social</h3>
        <ul>
          <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://your-blogger-url.com/" target="_blank" rel="noopener noreferrer">Blogger</a></li> {/* Ganti dengan URL Blogger kamu */}
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h3><span style={{ marginLeft: '-65px' }}>Newsletter</span></h3>
        <p>Let's create something amazing!</p>
        <div className="newsletter-form">
          <input type="text" placeholder="Tuliskan sesuatu di sini..." /> {/* Ubah type menjadi "text" */}
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;