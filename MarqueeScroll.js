import React, { useState } from 'react';
import './styles.css';

const LOGOS = [
  { name: 'Google', color: '#4285F4' },
  { name: 'Segopayment', color: '#7D00FF' },
  { name: 'Uipayment', color: '#4285F4' },
  { name: 'Twitter', color: '#1DA1F2' },
  { name: 'Logopayment', color: '#7D00FF' }
];

const MarqueeScroll = () => {
  const [duplicatedLogos, setDuplicatedLogos] = useState([...LOGOS]);

  return (
    <div className="my-marquee-container">
      <div className="my-marquee-content">
        <div className="my-marquee-animate">
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className="my-marquee-item">
              <div className="my-marquee-item-logo" style={{ backgroundColor: logo.color }} />
              <span className="my-marquee-item-text">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MarqueeScroll;