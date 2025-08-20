import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/SharePages/Navbar';
import Footer from '../Components/SharePages/Footer';
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Education from '../Pages/Education';
import Experience from '../Pages/Experience';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;