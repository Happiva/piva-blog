import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconButtonProps {
  buttonIcon: IconProp;
  link: string;
}

const IconButton = ({ buttonIcon, link }: IconButtonProps) => {
  return (
    <a target="_blank" aria-label="Button for Social link" href={link}>
      <FontAwesomeIcon icon={buttonIcon} />
    </a>
  );
};

export default IconButton;
