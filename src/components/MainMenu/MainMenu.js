import React, {Component} from 'react';
import styles from './MainMenu.scss';
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import menubar from './../../images/menubar.png'

const cx = classNames.bind(styles);

class MainMenu extends Component {
  render() {
    return (
      <div className={cx('menu-back')}>
        <div className={cx('menu-context')}>
          <div className={cx('menu-kayin')}><Link to="/" className={cx('link')}>Kayin</Link></div>
          <div className={cx('under-menu')}>
            <div><img src={menubar} alt="menubar" className={cx('menubar')}/></div>
            <div className={cx('work-menu')}>Work</div>
            <div className={cx('about-menu')}><Link to="/about" className={cx('link')}>About</Link></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
