import React, { useState } from 'react';
import Logo from '../../images/logo.svg';
import LoginButton from './LoginNav';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navLinks] = useState([
    {
      page: 'Home',
      link: '/',
    },
    {
      page: 'About',
      link: '/',
    },
    {
      page: 'Features',
      link: '/',
    },
  ]);
  return (
    <header>
      <div className="inner_container">
        <div className="header_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            {navLinks.map((item, index) => (
              <li>
                <Link to={item.link}>{item.page}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
