import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './blog.css';

const Blog = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='gpt3__blog section__margin' id='blog'>
      <div className="gpt3__blog-header">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className='gpt3__blog-container_groupA' data-aos="fade-right" data-aos-delay="350" data-aos-duration="800">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            anim=""
          />
        </div>
        <div className='gpt3__blog-container_groupB' data-aos="fade-left" data-aos-delay="350" data-aos-duration="800">
          <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;