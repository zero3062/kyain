import React, {Component} from 'react';
import styles from './WorkPage.scss';
import { Link } from "react-router-dom";
import MainMenu from '../MainMenu/MainMenu';
import WorkItem from '../WorkItem/WorkItem';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class WorkPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={cx('work-back')}>
        <div className={cx('work-contents')}>
          <div className={cx('work-maintitle')}>목록</div>
          <div className={cx('work-listBox')}>
            <WorkItem/>
            <WorkItem/>
            <WorkItem/>
            <WorkItem/>
            <WorkItem/>

          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage;
