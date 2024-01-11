import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideWave from '../SideWave';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="absolute h-[100%] -z-10 hidden lg:block">
        <SideWave />
      </div>
      <Header />
      <main className="px-[16px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
