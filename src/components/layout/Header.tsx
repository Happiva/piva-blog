import React from 'react';
import Link from 'next/link';
import ColorModeSwitch from '../ColorModeSwitch';
import Wave from '../Wave';
import Navigator from './Navigator';

const Header = () => {
  return (
    <header className="justify-between relative flex min-h-[77px] items-center lg:bg-sand-dark lg:py-[12px] lg:px-[34px]">
      <div className="absolute w-full top-0 lg:hidden z-0">
        <Wave />
      </div>
      <Link
        href="/"
        className="text-3xl text-white italic font-bold drop-shadow pl-[16px] lg:text-gray-dark lg:text-[32px]"
      >
        Code box:
      </Link>
      <div className="flex items-center">
        <Navigator />
        <ColorModeSwitch />
      </div>
    </header>
  );
};

export default Header;
