import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
            <Route exact path='/' exact component={Home} />
            <Route path='/:user(\d+)'  exact component={User} />
            <Route path='/about/' exact component={About} />
            <Route  component={NotMatch} />
        </Router>
      </div>
    );
  }
}

export default App;
