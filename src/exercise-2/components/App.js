import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Link,Switch, Redirect} from 'react-router-dom';
import Home from "./Home";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";
import Products from "./Products";
import ProDetails from './ProDetails';

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
                          <li className="nav-item active">
                            <Link to="/products" className="nav-link">Products</Link>
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
            <Switch>
              <Route path="/products" component={Products}/>
              <Route path="/products/:id" component={ProDetails}/>
              <Route exact path="/my-profile" component={MyProfile}/>
              <Route exact path="/about-us" component={AboutUs}/>
              <Route exact path="/" component={Home}/>
              <Redirect from={"/goods"} to={"/products"} />
              <Redirect from={"/"} to={"/"} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
