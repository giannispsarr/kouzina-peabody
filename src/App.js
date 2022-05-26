import React from 'react';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/Gallery';
import Video from './Components/Video';
import { Element } from 'react-scroll';

export default function App () {
  return <>
  <Navbar/>
  <Element id='Home' name='Home'>
    <Video/>
  </Element>
  <Element id='Menu' name='Menu'>
    <Menu/>
  </Element>
  {/* <Element id='AboutUs' name='AboutUs'>
    <AboutUs/>
  </Element> */}
  <Element id='Gallery' name='Gallery'>
    <Gallery/>
  </Element>
  <Footer/>
  </>;
}
