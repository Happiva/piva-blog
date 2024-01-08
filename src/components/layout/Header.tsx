import React from 'react';
import ColorModeSwitch from '../ColorModeSwitch';

const Header = () => {
  return (
    <header className="justify-between flex">
      <div>Code box:</div>
      <ColorModeSwitch />
    </header>
  );
};

export default Header;
