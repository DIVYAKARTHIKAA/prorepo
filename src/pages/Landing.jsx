import React from 'react'

import Slide from './Slide';
import Footer from './Footer';
import Navbar3 from './Navbar3';
import '../assets/css/Landing.css';
import './Landing.css'
const Landing = () => {
  return (
    <>
    <div className="control-container">
    <Slide/>
    <Navbar3/>
    <Footer/>
    </div>
    </>
  );
}
export default Landing