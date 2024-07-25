import React from 'react';
import Navbar from '@Components/Layout/Navbar'
import Footer from '@Components/Layout/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <header className='relative'>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;