import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../IconButton';

const Footer = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const footerStyle = `${props.className} py-[24px] flex h-fit flex-col items-center`;

  return (
    <footer className={footerStyle}>
      <div className="flex space-x-2 mb-[8px]">
        <IconButton buttonIcon={faGithub} link="https://github.com/Happiva" />
        <IconButton buttonIcon={faBlog} link="https://hphhbva.tistory.com/" />
      </div>
      <div className="text-gray-dark text-xs dark:text-white">
        ⓒ 2024 by Piva
      </div>
    </footer>
  );
};

export default Footer;
