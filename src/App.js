import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Home from './components/home';
import Tasks from './components/tasks';
import Schedule from './components/schedule';
import Edit from './components/edit'
function App() {
  return (
    <Router>
    <div className="container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Link to="/" className="navbar-brand" style={{color:"red"}}>Scheduler</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/schedule" className="nav-link">Schedule</Link>
            </li>
            <li className="navbar-item">
              <Link to="/edit/:id" className="nav-link">Edit</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Route path="/" exact component={Home}/>
      <Route path="/tasks/:id"  component={Tasks}/>
      <Route path="/schedule"  component={Schedule}/>
      <Route path='/edit/:id' component={Edit} />
    </div>
    </Router>
  );
}

export default App;
