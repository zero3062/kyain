import React, {Component} from 'react';
import styles from './AboutPage.scss';
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class AboutPage extends Component {
  render() {
    return (
      <div className={cx('about-back')}>
        <div className={cx('about-contents')}>
          <div className={cx('language')}>
            <div className={cx('KR')}>KR</div>
            <div className={cx('EN')}>EN</div>
          </div>
          <div className={cx('contents-box')}>
            <div className={cx('contnets-title-KR')}>블로그 소개</div>
            <div className={cx('contents-text-box')}>
              <span className={cx('contents-text-KR')}>
                Kyain은 국내에서 일어나는 각종 범죄들을 정리한 블로그입니다.
                이 블로그는 개인적으로 만들어진 블로그이므로 운영자의 개인 관심사를 포스팅하고 있습니다.
                정리된 내용의 출처는 포스트 하단에서 찾아보실 수 있고, 만약 본 블로그의 글을 퍼가거나 소개하려고 할 때는 출처를 꼭 밝혀주시길 바랍니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
