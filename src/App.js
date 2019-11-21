import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Home from './components/home';
import Tasks from './components/tasks';
import Schedule from './components/schedule';
import Edit from './components/edit'
function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand navbar-light bg-danger ">
        <Link to="/" className="navbar-brand mx-auto" style={{color:"white", fontStyle: "italic", fontSize:"2em"}}>Scheduler</Link>
        <div className="collpase navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{color: "White"}}>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/schedule" className="nav-link"style={{color: "White"}}>Schedule</Link>
            </li>
            <li className="navbar-item">
              <Link to="/edit/:id" className="nav-link"style={{color: "White"}}>Edit</Link>
            </li>
          </ul>
        </div>
        </nav>
        <nav>
        <nav className="navbar fixed-bottom navbar-light bg-danger mx-auto order-0">
          <a className="navbar-brand mx-auto " href="/" style={{ color: "white", fontStyle: "italic", fontSize:"2em" }}>Scheduler</a>
        </nav>
      </nav>


      <Route path="/" exact component={Home} />
      <Route path="/tasks/:id" component={Tasks} />
      <Route path="/schedule" component={Schedule} />
      <Route path='/edit/:id' component={Edit} />
    </Router>
  );
}

export default App;
