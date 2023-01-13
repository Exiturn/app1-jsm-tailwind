import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './cta.css';

const Cta = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='gpt3__cta section__margin' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
      <div className='gpt3__cta-banner'>
        <div className='gpt3__cta-banner__content'>
          <h3>Request Early Access to Get Started</h3>
          <h1>Register today & start exploring the endless possiblities.</h1>
        </div>
        <div className='gpt3__cta-banner__button'>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Cta;