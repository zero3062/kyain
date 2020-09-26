import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styles from './MainMenu.scss';
import classNames from 'classnames/bind';
import menubar from './../../images/menubar.png';
import cross from './../../images/cross.png';

const cx = classNames.bind(styles);

const MainMenu = () => {
  let history = useHistory();

  const [menuBar, setMenuBar] = useState(false);

  const onClickKayin = () => {
    history.push({
       pathname: '/',
    })
  }

  const onClickAbout = () => {
    history.push({
       pathname: '/about',
    })
  }

  const onClickWork = () => {
    history.push({
       pathname: '/work',
    })
  }

  return (
    <div>
      { menuBar === true ?
          <div className={cx('short-back')}>
            <div className={cx('cross-div')} onClick={() => setMenuBar(false)}><img src={cross} alt="cross" className={cx('cross')}/></div>
            <div className={cx('hidden')}>
              <div className={cx('hidden-about')} onClick={onClickAbout}>About</div>
              <div className={cx('hidden-work')} onClick={onClickWork}>Work</div>
            </div>
          </div>
          :
          <div className={cx('menu-back')}>
            <div className={cx('menu-context')}>
              <div className={cx('menu-kayin')} onClick={onClickKayin}>Kayin</div>
              <div className={cx('under-menu')}>
                <div className={cx('menubar-div')} onClick={() => setMenuBar(true)}><img src={menubar} alt="menubar" className={cx('menubar')}/></div>
                <div className={cx('work-menu')} onClick={onClickWork}>Work</div>
                <div className={cx('about-menu')} onClick={onClickAbout}>About</div>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default MainMenu;
