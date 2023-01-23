import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Spinner from '../Spinner';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Copyright from '../Copyright';
import BackToTop from '../BackToTop';
import WOW from 'wow.js';

function Layout(): JSX.Element {

  useEffect(() => {
    const wowjs = new WOW();
    
    wowjs.init();
  }, []);

  return (
    <>
      <ScrollRestoration/>
      <Spinner />
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
}

export default Layout;
