import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './article.css';

const Article = ({ imgUrl, date, title, anim, delay, duration }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-img">
        <img src={ imgUrl } alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{ date }</p>
        <h3>{ title }</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article