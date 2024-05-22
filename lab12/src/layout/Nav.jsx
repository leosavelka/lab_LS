import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import logotip from '../img/logo.svg';
import calc from '../img/calculation.svg';
import meas from '../img/measering.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src={logotip} alt="Logo" className={styles.logotip} />
      </div>
      <ul className={`${styles.navList} ${styles.form}`}>
        <li><Link to="/Services" className={`${styles.navList} ${styles.item}`}>Услуги</Link></li>
        <li><Link to="/Products" className={`${styles.navList} ${styles.item}`}>Продукты</Link></li>
        <li><Link to="/AboutUs" className={`${styles.navList} ${styles.item}`}>О Нас</Link></li>
        <li><Link to="/Portfolio" className={`${styles.navList} ${styles.item}`}>Портфолию</Link></li>
        <li><Link to="/FAQ" className={`${styles.navList} ${styles.item}`}>FAQ</Link></li>
        <li><Link to="/Contacts" className={`${styles.navList} ${styles.item}`}>Контакты</Link></li>
      </ul>
      <div className={styles.containerbtn}>
        <Link to="/make-request" className={`${styles.btn} ${styles.rqtbtn}`}><img src={meas} alt="Make Request" className={styles.icon} /> Создать запрос </Link>
        <Link to="/calculation" className={`${styles.btn} ${styles.calcbtn}`}><img src={calc} alt="Calculation" className={styles.icon} /> Расчитать </Link>
      </div>
    </nav>
  );
};

export default Nav;