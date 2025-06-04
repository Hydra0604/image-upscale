import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const ScrollWrapper = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export { ScrollWrapper, Link, Element, scroll };
