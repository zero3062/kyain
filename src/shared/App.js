import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Work } from 'pages';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
      </div>
    );
  }
}

export default App;
