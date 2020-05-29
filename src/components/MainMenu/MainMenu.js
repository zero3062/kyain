import React, {Component} from 'react';
import styles from './MainMenu.scss';
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import menubar from './../../images/menubar(1).png'

const cx = classNames.bind(styles);

class MainMenu extends Component {
  render() {
    return (
      <div className={cx('menu-back')}>
        <div className={cx('menu-context')}>
          <div className={cx('menu-kayin')}>Kayin</div>
          <div className={cx('under-menu')}>
            <div className={cx('work-menu')}>Work</div>
            <div className={cx('about-menu')}>About</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
