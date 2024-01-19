import React from 'react';
import { LayoutProps } from '@/types';
import Header from './Header';
import Footer from './Footer';
import SideWave from '../SideWave';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="absolute h-[100%] -z-10 hidden lg:block">
        <Footer className="absolute bottom-0 left-[16px]" />
        <SideWave />
      </div>
      <Header />
      <main className="h-lvh px-[16px] pt-[20px]">{children}</main>
      <Footer className="lg:hidden" />
    </div>
  );
};

export default Layout;
