import React, {Component} from 'react';
import MainMenu from '../components/MainMenu/MainMenu';
import WritePage from '../components/WritePage/WritePage';

class Write extends Component {
  render() {
    return(
      <div>
        <MainMenu/>
        <WritePage></WritePage>
      </div>
    );
  }
}

export default Write;
