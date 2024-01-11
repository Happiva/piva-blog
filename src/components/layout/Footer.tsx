import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../IconButton';

const Footer = () => {
  return (
    <footer className="py-[24px] flex flex-col items-center">
      <div className="flex space-x-2 mb-[8px]">
        <IconButton buttonIcon={faGithub} link="https://github.com/Happiva" />
        <IconButton buttonIcon={faBlog} link="https://hphhbva.tistory.com/" />
      </div>
      <div className="text-gray-dark text-xs">ⓒ 2023 by Piva</div>
    </footer>
  );
};

export default Footer;
