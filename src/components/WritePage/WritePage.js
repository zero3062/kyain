import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './WritePage.scss';

const cx = classNames.bind(styles);

const WritePage = () => {
  let history = useHistory();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onClickCancel = () => {
    history.push({
      pathname: '/work',
    })
  }

  const onClickSubmit = () => {
    if (title !== '' && text !== '') {
      history.push({
        pathname: '/work',
        state: {
          title: title,
          text: text
        }
      })
    } else {
      alert('제목 또는 내용을 확인해주세요.');
    }
  }

  return(
    <div className={cx('write-back')}>
      <div className={cx('write-contents')}>
        <div className={cx('write-titleItem')}>
          <input className={cx('write-title')} type="text" placeholder="제목" onChange={event => setTitle(event.target.value)}/>
          <div className={cx('write-cancel')} onClick={onClickCancel}>취소</div>
          <div className={cx('write-submit')} onClick={onClickSubmit}>발행</div>
        </div>
        <div className={cx('write-textItem')}>
          <textarea className={cx('write-text')} type="text" placeholder="내용을 입력해주세요." onChange={event => setText(event.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default WritePage;
