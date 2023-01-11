import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/logo.svg';
import './navbar.css';

//BEM --> Block Element Modifier

const Menu = () => (
  <>
    <p data-aos="fade-down" data-aos-delay="200" data-aos-duration="200"><a href="#home">Home</a></p>
    <p data-aos="fade-down" data-aos-delay="400" data-aos-duration="200"><a href="#wgpt3">What is GPT?</a></p>
    <p data-aos="fade-down" data-aos-delay="600" data-aos-duration="200"><a href="#possibility">OpenAI</a></p>
    <p data-aos="fade-down" data-aos-delay="800" data-aos-duration="200"><a href="#features">Case Studies</a></p>
    <p data-aos="fade-down" data-aos-delay="1000" data-aos-duration="200"><a href="#blog">Library</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="gpt3__navbar flex">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo" data-aos="fade-down" data-aos-delay="0">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Navbar;