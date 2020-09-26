import React from 'react';
import styles from './MainHome.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainHome = () => {
  return (
    <div className={cx('home-back')}>
      <div className={cx('home-contents')}>
        <div className={cx('punishment')}>"My punishment is more than I can bear.”</div>
        <div className={cx('genesis')}>-by Genesis 4:14-</div>
      </div>
    </div>
  );
}

export default MainHome;
