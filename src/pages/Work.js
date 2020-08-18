import React, {Component} from 'react';
import MainMenu from '../components/MainMenu/MainMenu';
import WorkPage from '../components/WorkPage/WorkPage';

class Work extends Component {
  render() {
    return(
      <div>
        <MainMenu/>
        <WorkPage></WorkPage>
      </div>
    );
  }
}

export default Work;
