import React from 'react';
import styles from './WorkItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WorkItem = ({ title, text, img }) => {
  return (
    <div className={cx('workItem-back')}>
      <div className={cx('workItem-contents')}>
        <div className={cx('workItem-title')}>{title}</div>
        <div className={cx('workItem-text')}>{text}</div>
      </div>
      <div><img className={cx('workItem-img')} src={img} alt={title}/></div>
    </div>
  );
}

export default WorkItem;
