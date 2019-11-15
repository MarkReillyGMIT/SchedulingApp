import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Home from './components/home';
import Tasks from './components/tasks';
import Schedule from './components/schedule';
import logo from './icons8-menu-24.png';
function App() {
  return (
    <Router>
    <div className="container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"  target="_blank">
         <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
        </a>
        <Link to="/" className="navbar-brand">Scheduler</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/schedule" className="nav-link">Schedule</Link>
            </li>
            <li className="navbar-item">
              <Link to="/tasks/:id" className="nav-link">Tasks</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Route path="/" exact component={Home}/>
      <Route path="/tasks/:id"  component={Tasks}/>
      <Route path="/schedule"  component={Schedule}/>
    </div>
    </Router>
  );
}

export default App;
