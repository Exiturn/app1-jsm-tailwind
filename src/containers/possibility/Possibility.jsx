import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './possibility.css';
import possibility from '../../assets/possibility.png';


const Possibility = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='gpt3__possibility section__margin-possibility' id='possibility'>
      <div className='gpt3__possibility-image' data-aos="fade-right" data-aos-delay="350" data-aos-duration="800">
        <img src={possibility} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content' data-aos="fade-left" data-aos-delay="350" data-aos-duration="800"> 
        <p className='gpt3__possibility-content__subtext-1'>
          Request Early Access to Get Started
        </p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='gpt3__possibility-content__paragraph'>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <p className='gpt3__possibility-content__subtext-2'>
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  )
}

export default Possibility;