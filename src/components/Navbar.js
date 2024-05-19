import React from 'react';

const Navbar = ({ onSelectType }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => onSelectType('dogs')}>Dogs</li>
        <li onClick={() => onSelectType('cats')}>Cats</li>
        <li onClick={() => onSelectType('birds')}>Birds</li>
      </ul>
    </nav>
  );
};

export default Navbar;

