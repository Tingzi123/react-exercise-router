import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from "./Home";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <div className="header">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/my-profile" className="nav-link">My Profile</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/about-us" className="nav-link">About Us</Link>
                          </li>
                        </ul>
                      </div>
                  </nav>
              </div>
            <switch>
              <Route exact path="/my-profile" component={MyProfile}/>
              <Route exact path="/about-us" component={AboutUs}/>
              <Route exact path="/" component={Home}/>
            </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
