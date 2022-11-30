import { FC, useState, useEffect, use } from 'react';
import Image from 'next/image';
import chevron from '../public/icon-chevron.svg';

import styles from './navbar-item.module.css';

interface NavBarItem {
  label: string;
  href?: string;
}

interface NavBarItemProps {
  link: NavBarItem;
  items?: NavBarItem[];
  forceClose?: boolean;
}

const NavBarItem: FC<NavBarItemProps> = ({ link, items, forceClose = false }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (forceClose) {
      setIsActive(false);
    }
  }, [forceClose])

  return (
    <li className={[styles['navbar-item'], styles[isActive ? 'navbar-item--is-active' : '']].join(' ')} role="menuitem">
      {link.href ? (
        <a className={styles['navbar-item__link']} href={link.href}>
          {link.label}
        </a>
      ) : (
        <button className={styles['navbar-item__link']}
          onClick={() => {
            setIsActive(!isActive)
          }}
        >
          {link.label}
          <Image
            className={styles['navbar-item__icon']}
            alt=""
            src={chevron}
            width={16}
            height={16}
          />
        </button>
      )}

      {items &&
        <ul
          className={[styles['navbar__list'], styles['navbar__list--level-2']].join(' ')}
        >
          <li className="navbar-item__list" role="menuitem">
            <button className={styles['navbar-item__button']}
             onClick={() => {
              setIsActive(false)
            }}>
              <Image
                className={styles['navbar-item__button-icon']}
                alt=""
                src={chevron}
                width={16}
                height={16}
              />
              Back
            </button>
          </li>
          {items?.map(item =>
            <li key={item.href} className={styles['navbar-item']} role="menuitem">
              <a className={styles['navbar-item__link']} href={item.href}>
                {item.label}
              </a>
            </li>
          )}
        </ul>
      }
    </li>
  );
};

export default NavBarItem;
