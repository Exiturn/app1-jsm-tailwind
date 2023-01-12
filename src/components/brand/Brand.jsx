import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import './brand.css';
import { google, slack, atlassian, shopify, dropbox } from './import.js';

const Brand = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='gpt3__brand section__padding bg-blend-normal'>
      <div data-aos="fade-up" data-aos-delay="200"><img src={google} alt="google" /></div>
      <div data-aos="fade-up" data-aos-delay="400"><img src={slack} alt="slack" /></div>
      <div data-aos="fade-up" data-aos-delay="600"><img src={atlassian} alt="atlassian" /></div>
      <div data-aos="fade-up" data-aos-delay="800"><img src={dropbox} alt="dropbox" /></div>
      <div data-aos="fade-up" data-aos-delay="1000"><img src={shopify} alt="shopify" /></div>
    </div>
  )
}

export default Brand;