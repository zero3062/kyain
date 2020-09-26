import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import styles from './WorkPage.scss';
import WorkList from '../WorkList/WorkList';
import classNames from 'classnames/bind';
import xMark from './../../images/death.jpg';

const cx = classNames.bind(styles);

const WorkPage = () => {
  let history = useHistory();
  const location = useLocation();

  const [works, setWorks] = useState([
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
    }
  ]);

  useEffect(() => {
    console.log(works);
    console.log(works.length);
    if (typeof (location.state) !== 'undefined' && location.state !== null) {
      const { title, text } = location.state;

      setWorks([
        ...works,
        {
          id: works.length + 2,
          title: title,
          text: text,
          img: xMark,
        }
      ])

    }
  },[]);


  const onClickWrite = () => {
    history.push({
      pathname: '/write'
    })
  }

  return (
    <div className={cx('work-back')}>
      <div className={cx('work-contents')}>
        <div className={cx('work-maintitle')}>
          <div>목록</div>
          <div className={cx('work-add')} onClick={onClickWrite}>글 작성</div>
        </div>
        <div className={cx('work-listBox')}>
          <WorkList works={works}/>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
