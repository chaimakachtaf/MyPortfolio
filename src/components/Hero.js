import React from 'react';
import '../index.css';

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="profile-image">
          <img src="chaimaa-profile.png" alt="Chaimaa Elkachtaf" />
        </div>
        <h1>Chaimaa Elkachtaf</h1>
        <p>Spécialiste des applications mobiles et Web | Passionné par l'innovation technologique</p>
        <a href="#contact" className="btn">Contactez-moi</a>
      </div>
    </div>
  );
}
export default Hero;
