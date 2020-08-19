import React, {Component} from 'react';
import styles from './WorkItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class WorkItem extends Component {
  render() {
    const {title,text,img} = this.props;

    return (
      <div className={cx('workItem-back')}>
        <div className={cx('workItem-contents')}>
          <div className={cx('workItem-title')}>{title}</div>
          <div className={cx('workItem-text')}>{text}</div>
        </div>
        <div><img className={cx('workItem-img')} src={img}/></div>
      </div>
    );
  }
}

export default WorkItem;
