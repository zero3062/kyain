import React, {Component} from 'react';
import MainMenu from '../components/MainMenu/MainMenu';
import MainHome from '../components/MainHome/MainHome';

class Home extends Component {
  render() {
    return(
      <div>
        <MainMenu></MainMenu>
        <MainHome></MainHome>
      </div>
    );
  }
}

export default Home;
