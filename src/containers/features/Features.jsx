import React from 'react';
import { Feature } from '../../components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    anim: 'fade-left',
    delay: '200'
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    anim: 'fade-left',
    delay: '400'
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    anim: 'fade-left',
    delay: '600'
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
    anim: 'fade-left',
    delay: '800'
  },
]

const Features = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='gpt3__features section__margin-features' id='features'>
      <div className="gpt3__features-heading" data-aos="fade-right">
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features__feature-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} anim={item.anim} delay={item.delay}/>
        ))}
      </div>
    </div>
  )
}

export default Features;