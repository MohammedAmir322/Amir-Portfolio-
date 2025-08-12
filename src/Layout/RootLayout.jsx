import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/SharePages/Navbar';
import Footer from '../Components/SharePages/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;