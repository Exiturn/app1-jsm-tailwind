import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './feature.css';

const Feature = ({ title, text, anim, delay }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='gpt3__features-container__feature' data-aos={anim} data-aos-delay={delay}>
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{ title }</h1>       
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>
          { text }
        </p>
      </div>
    </div>
  )
}

export default Feature;