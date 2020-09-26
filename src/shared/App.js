import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Work, Write } from 'pages';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/write" component={Write}/>
      </div>
    );
  }
}

export default App;
