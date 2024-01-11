import React from 'react';
import ColorModeSwitch from '../ColorModeSwitch';
import Wave from '../Wave';

const Header = () => {
  return (
    <header className="justify-between relative flex min-h-[77px] items-center lg:bg-sand-dark lg:py-[12px] lg:px-[34px]">
      <div className="absolute w-full top-0 lg:hidden z-0">
        <Wave />
      </div>
      <div className="text-3xl text-white italic font-bold drop-shadow pl-[16px] lg:text-gray-dark lg:text-[32px]">
        Code box:
      </div>
      <ColorModeSwitch />
    </header>
  );
};

export default Header;
