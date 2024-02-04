import { navLinks } from '@/constants';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

const MobileNavigator = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const onClickButton = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Mobile nav button"
        className="relative mr-[16px] lg:hidden"
        onClick={onClickButton}
      >
        <FontAwesomeIcon icon={faBars} className="size-[25px]" />
      </button>
      <div
        className={`bg-white/50 absolute inset-0 flex flex-col overflow-hidden dark:bg-dark-blue-dark/50 ${
          isMenuVisible ? 'block' : 'hidden'
        }`}
      >
        <div
          className={`bg-white flex flex-col items-center self-end p-[16px] ${
            isMenuVisible ? 'animate-slide' : 'animate-slide-back'
          } h-full dark:bg-dark-blue-dark w-[70%]`}
        >
          <button
            type="button"
            className="size-[25px]"
            aria-label="Nav close button"
            onClick={onClickButton}
          >
            <FontAwesomeIcon icon={faXmark} className="size-[25px]" />
          </button>
          <div className="w-[80%] bg-dark-sky-200 h-[2px] rounded-full mt-[10px]" />
          {navLinks.map(({ text, link }) => (
            <Link
              key={text}
              href={link}
              onClick={onClickButton}
              className={`${comfortaa.variable} text-[24px] font-comfortaa py-[20px]`}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavigator;
