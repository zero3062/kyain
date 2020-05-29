import React, {Component} from 'react';
import MainMenu from '../components/MainMenu/MainMenu';
import AboutPage from '../components/AboutPage/AboutPage';

class About extends Component {
  render() {
    return(
      <div>
        <MainMenu></MainMenu>
        <AboutPage></AboutPage>
      </div>
    );
  }
}

export default About;
