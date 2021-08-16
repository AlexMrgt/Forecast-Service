import React from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import LogoImage from '../../images/logo/logo.png';

import './Header.css';

interface Props {
  onSearchSubmit: (substing: string) => void,
}

const Header: React.FC<Props> = ({
  onSearchSubmit,

}) => {

  const menuList = [
    {
      id: 1,
      title: 'Current',
      link: '/'
    },
    {
      id: 2,
      title: 'Week',
      link: '/weekly',
    },
  ];

  return (
    <section className='header'>
      <div className='header__container' >
        <div className='header__logo-container'>
          <img
            src={LogoImage}
            alt='logo'
            className='header__logo'
          />
        </div>

        <SearchForm onSearchSubmit={onSearchSubmit} />

        <nav className='header__nav-panel'>
          <ul className='header__nav-list'>
            {menuList.map((item) => (
              <li
                key={item.id}
                className='header__nav-item'
              >
                <NavLink
                  to={item.link}
                  exact
                  className='header__nav-link'
                  activeClassName='header__nav-link_active'
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Header;
