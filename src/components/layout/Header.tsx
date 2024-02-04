import React from 'react';
import Link from 'next/link';
import ColorModeSwitch from '../ColorModeSwitch';
import Wave from '../Wave';
import Navigator from './Navigator';
import MobileNavigator from './MobileNavigator';

const Header = () => {
  return (
    <header className="justify-between flex min-h-[65px] w-full items-center lg:dark:bg-dark-black lg:bg-sand-dark lg:fixed lg:z-10 lg:py-[12px] lg:px-[34px]">
      <div className="absolute w-full top-0 lg:hidden z-0">
        <Wave />
      </div>
      <Link
        href="/"
        className="text-3xl text-white italic font-bold drop-shadow pl-[16px] dark:lg:text-white lg:text-gray-dark lg:text-[32px]"
      >
        Code box:
      </Link>
      <div className="flex">
        <Navigator />
        <ColorModeSwitch />
        <MobileNavigator />
      </div>
    </header>
  );
};

export default Header;
