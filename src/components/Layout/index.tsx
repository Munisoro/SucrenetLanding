import React, { FC, useEffect } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import Spinner from '../Spinner';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Copyright from '../Copyright';
import BackToTop from '../BackToTop';
import WOW from 'wow.js';

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const wowjs = new WOW();
    
    wowjs.init();
  }, []);

  return (
    <>
      <ScrollRestoration/>
      <Spinner />
      <Navbar />
        {children}
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
}

export default Layout;
