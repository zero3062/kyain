import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './WritePage.scss';

const cx = classNames.bind(styles);

class WritePage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className={cx('write-back')}>
        <div className={cx('write-contents')}>
          <div className={cx('write-titleItem')}>
            <input className={cx('write-title')} type="text" placeholder="제목"/>
            <input className={cx('write-cancel')} type="button" value="취소"/>
            <input className={cx('write-submit')} type="submit" value="발행"/>
          </div>
          <div className={cx('write-textItem')}>
            <textarea className={cx('write-text')} type="text" placeholder="내용을 입력해주세요."/>
          </div>
        </div>
      </div>
    );
  }
}

export default WritePage;
