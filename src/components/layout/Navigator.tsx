import { navLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Navigator = () => {
  return (
    <div className="hidden space-x-10 items-center lg:flex mr-[40px]">
      {navLinks.map(({ text, link }) => (
        <Link key={text} href={link} className="text-[18px] font-comfortaa">
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Navigator;
