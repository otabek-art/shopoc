import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.scss';

const Header = () => {
  const { isActive, toggleBurger, user, isAuth, logout } = useAppContext();

  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true,     // Запуск анимации только один раз
    });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <div className="container">
        <div className="header__wrapper" data-aos="fade-up">
          <div className="header__wrap">
            <div className="header__header" data-aos="zoom-in">
              <Link to={'/'}>
                <img className="logo__img" src="/SHOP.CO.svg" alt="Logo" />
              </Link>
              <div className={`header__menu ${isActive ? 'active' : ''}`} data-aos="fade-left">
                <Link to={'/sale'} className="dropdown">
                  Shop
                  <img
                    src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                    alt="Dropdown Icon"
                  />
                  <div>
                    <Link to={'/'}>Men</Link>
                    <Link to={'/'}>Women</Link>
                    <Link to={'/'}>Kids</Link>
                  </div>
                </Link>
                <a href="/#selling">On Sale</a>
                <a href="/#arrivals">New Arrivals</a>
                <Link to={'/brands'}>Brands</Link>
              </div>
            </div>

            <div
              onClick={toggleBurger}
              className={`burger ${isActive ? 'active' : ''}`}
              data-aos="flip-left"
            >
              <div className="div"></div>
              <div className="div"></div>
              <div className="div"></div>
            </div>
          </div>

          <div className="header__search" data-aos="fade-in">
            <div className="header__input">
              <img src="/search-icon.svg" alt="Search Icon" />
              <p>Search for products...</p>
            </div>
            <img src="/icon-1.svg" alt="Icon" />

            {isAuth ? (
              <div>
                <b>{user.username}</b> <br />
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <Link to={'/login'}>
                <img src="/icon-2.svg" alt="Login Icon" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
