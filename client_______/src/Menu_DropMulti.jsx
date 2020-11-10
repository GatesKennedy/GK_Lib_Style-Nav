import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
//  STYLE
import './index.css';

const Menu_DropMulti = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
};

export default Menu_DropMulti;
