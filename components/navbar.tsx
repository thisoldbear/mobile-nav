import { useState, useContext } from 'react';
import Image from 'next/image';
import logo from '../public/gmbnLogo-text.svg';
import socialIcons from '../public/social-icons.png';
import iconSearch from '../public/icon-search.svg';
import NavBarItem from './navbar-item';
import styles from './navbar.module.css';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<'search' | 'menu' | null>(null);

  return (
    <div className={[styles['navbar'], styles[activeSection === 'menu' ? 'navbar--is-active' : '']].join(' ')}>
      <div>
        <Image
          className={styles['navbar__brand']}
          alt="Logo"
          src={logo}
          width={120}
          height={48}
        />
      </div>
      <div className={styles['navbar__buttons']}>
        <button className={styles['navbar__toggle-button']}
          onClick={() => {
            setActiveSection(activeSection !== 'menu' ? 'menu' : null);
          }}>
          <div className={styles['navbar__toggle-icon']}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <Image
          className={styles['navbar__social']}
          alt="Social Icons"
          src={socialIcons}
          width={200}
          height={37}
        />
        <button
          className={styles['navbar__search-button']}
          onClick={() => {
            setActiveSection(activeSection !== 'search' ? 'search' : null);
          }}
        >
          <Image
            className={styles['navbar__search-icon']}
            alt="Search"
            src={iconSearch}
            width={22}
            height={22}
          />
        </button>
      </div>
      <div
        className={[
          styles['search-bar'],
          styles[activeSection === 'search' ? 'search-bar--active' : ''],
        ].join(' ')}
      >
        <input
          className={styles['search-bar__input']}
          placeholder="Search"
        ></input>
      </div>
      <div className={styles['navbar__menu']}>
        <ul className={styles['navbar__list']} role="menubar">
          <NavBarItem link={{ label: "Home", href: "#" }} />
          <NavBarItem link={{ label: "Dirt Shed Show", href: "/category/the-dirt-shed-show" }} />
          <NavBarItem link={{ label: "Guides" }} items={[
            { label: 'How To', href: '/category/how-to' },
            { label: 'MTB Maintainance', href: '/category/mtb-maintenance' }
          ]}
            forceClose={activeSection !== 'menu'}
          />
          <NavBarItem link={{ label: "Presenters" }} items={[
            { label: 'Martyn Ashton', href: '/presenters/martyn-ashton' },
            { label: 'Neil Donoghue', href: '/presenters/neil-donoghue' },
            { label: 'Blake Samson', href: '/presenters/blake-samson' },
            { label: 'Andre Dodd', href: '/presenters/andrew-dodd' }
          ]}
            forceClose={activeSection !== 'menu'} />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
