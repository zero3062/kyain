import React, {Component} from 'react';
import styles from './WorkPage.scss';
import { Link } from "react-router-dom";
import MainMenu from '../MainMenu/MainMenu';
import WorkList from '../WorkList/WorkList';
import classNames from 'classnames/bind';
import xMark from './../../images/death.jpg';

const cx = classNames.bind(styles);

class WorkPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      works: [
        {
          id: 1,
          title: "이춘재 연쇄살인사건",
          text: "이춘재 연쇄 살인 사건(李春在連鎖殺人事件)은 1986년 9월 15일부터 1991년 4월 3일까지 경기도 화성군 일대에서 여성 10명이 강간, 살해된 사건이다. 모방범죄로 판단되었던 8차 사건을 제외하고 범인이 검거되지 않은채로 이 사건들의 공소시효는 범행 당시의 형사소송법 규정(제249조)에 따라 범행 후 15년이 지난 2001년 9월 14일 ~ 2006년 4월 2일 사이에 모두 만료되었다.",
          img: xMark,
        },
        {
          id: 2,
          title: "이춘재 연쇄살인사건",
          text: "이춘재 연쇄 살인 사건(李春在連鎖殺人事件)은 1986년 9월 15일부터 1991년 4월 3일까지 경기도 화성군 일대에서 여성 10명이 강간, 살해된 사건이다. 모방범죄로 판단되었던 8차 사건을 제외하고 범인이 검거되지 않은채로 이 사건들의 공소시효는 범행 당시의 형사소송법 규정(제249조)에 따라 범행 후 15년이 지난 2001년 9월 14일 ~ 2006년 4월 2일 사이에 모두 만료되었다.",
          img: xMark,
        },
      ]
    }
  }

  render() {
    const {works} = this.state;

    return (
      <div className={cx('work-back')}>
        <div className={cx('work-contents')}>
          <div className={cx('work-maintitle')}>
            <div>목록</div>
            <input className={cx('work-add')} type="button" value="글 작성"/>
          </div>
          <div className={cx('work-listBox')}>
            <WorkList works={works}/>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage;
