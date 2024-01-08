import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../IconButton';

const Footer = () => {
  return (
    <>
      <IconButton buttonIcon={faGithub} link="https://github.com/Happiva" />
      <IconButton buttonIcon={faBlog} link="https://hphhbva.tistory.com/" />
      <div>ⓒ 2023 by Piva</div>
    </>
  );
};

export default Footer;
