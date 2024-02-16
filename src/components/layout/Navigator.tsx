import { navLinks } from '@/constants';
import Link from 'next/link';

const Navigator = () => {
  return (
    <div className="hidden space-x-10 items-center lg:flex mr-[40px]">
      {navLinks.map(({ text, link, available }) =>
        available ? (
          <Link key={text} href={link} className="text-[18px] font-comfortaa">
            {text}
          </Link>
        ) : (
          <div
            key={text}
            data-text={text}
            className="text-[18px] font-comfortaa hover:text-gray-base after:content-[attr(data-text)] hover:after:content-['준비_중이에요!']"
          />
        ),
      )}
    </div>
  );
};

export default Navigator;
