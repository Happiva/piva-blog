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
    setIsMenuVisible((prev) => {
      if (prev) {
        document.body.style.overflow = 'auto';
      } else document.body.style.overflow = 'hidden';

      return !prev;
    });
  };

  return (
    <>
      <button
        type="button"
        aria-label="Mobile nav button"
        className="relative lg:hidden"
        onClick={onClickButton}
      >
        <FontAwesomeIcon icon={faBars} className="size-[25px]" />
      </button>
      {isMenuVisible && (
        <div className="bg-white/50 absolute inset-0 flex dark:bg-dark-blue-dark/50">
          <div className="bg-white flex flex-col dark:bg-dark-blue-dark w-[50%]">
            <button
              type="button"
              className="size-[25px]"
              aria-label="Nav close button"
              onClick={onClickButton}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            {navLinks.map(({ text, link }) => (
              <Link
                key={text}
                href={link}
                onClick={onClickButton}
                className={`${comfortaa.variable} text-[18px] font-comfortaa`}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigator;
