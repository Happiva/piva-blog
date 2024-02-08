import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideWave from '../SideWave';

const Layout = ({
  children,
  ...props
}: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  const layoutStyle = `flex flex-col h-full ${props.className}`;
  return (
    <div className={layoutStyle} {...props}>
      <div className="fixed h-[100%] -z-10 hidden lg:block">
        <Footer className="absolute bottom-0 z-10 left-[16px]" />
        <SideWave />
      </div>
      <Header />
      <main className="px-[20px] pt-[24px] lg:h-lvh lg:pt-[95px] lg:px-[30px]">
        {children}
      </main>
      <Footer className="lg:hidden" />
    </div>
  );
};

export default Layout;
