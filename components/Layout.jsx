import React from 'react';
import { Footer, Navbar } from '.';
import { useStateContext } from './context/StateContext';

const Layout = ({ children }) => {
  const { totalquantities } = useStateContext();
  return (
    <div>
      <Navbar notification={totalquantities} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
