import React from 'react'

import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import './App.css'

const App = () => {

  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
          <Brand />
        </div>
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <div className='gradient__bg'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;