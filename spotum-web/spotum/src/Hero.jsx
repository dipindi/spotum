import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/upload");
  };

  return (
    <section className='hero'>
      <div className='heroContent'>
        <h2 className='heroTitle'>
          REVOLUTIONIZE TUBERCULOSIS DETECTION WITH AI
        </h2>
        <p className='heroDescription'>
          Your AI-powered ally in detecting <br />
          tuberculosis from X-ray images <br />
          with an impressive 98% accuracy
        </p>
      </div>
      
      <button className='ctaButton' onClick={handleButtonClick}>
        Get Started
      </button>
     
    </section>
  );
};

export default Hero;
