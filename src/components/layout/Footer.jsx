import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import '../../styles/Footer.css';
import { campusData } from '../../data/mockData';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-sections">
          {campusData.map((campus, index) => (
            <div key={index} className="social-section">
              <h3 className="social-title">Redes Sociales</h3>
              <p className="campus-name">{campus.name}</p>
              
              <div className="social-links">
                <a 
                  href={campus.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label={`Instagram ${campus.name}`}
                >
                  <Instagram size={24} />
                </a>
                
                <a 
                  href={campus.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link youtube"
                  aria-label={`YouTube ${campus.name}`}
                >
                  <Youtube size={24} />
                </a>
                
                <a 
                  href={campus.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label={`Facebook ${campus.name}`}
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Defider USM - Universidad Técnica Federico Santa María</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;