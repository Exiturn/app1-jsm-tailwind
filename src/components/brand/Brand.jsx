import React from 'react';
import './brand.css';
import { google, slack, atlassian, shopify, dropbox } from './import.js';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding bg-blend-normal'>
      <div>
        <img src={ google } alt="google" />
        </div>
        <div><img src={ slack } alt="slack" /></div>
        <div><img src={ atlassian } alt="atlassian" /></div>
        <div><img src={ dropbox } alt="dropbox" /></div>
        <div><img src={ shopify } alt="shopify" /></div>
    </div>
  )
}

export default Brand;