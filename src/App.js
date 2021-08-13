import React from 'react';
import './App.css';
import Home from './components/Home';
import Bloodbank from "./components/Bloodbank";
import Devteam from "./components/Devteam";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import bloodbank from "./Images/bloodbank.png";
import Adminlogin from "./components/Adminlogin";
import Adminregister from "./components/Adminregister";
import Hospitalsdetails from "./components/Hospitalsdetails";
import Results from './components/Results';
import Protected from './Protectedroute';
function App() {
  const avatar_stylings={
    height:"70%",
    width:"100%",
    borderRadius:"10px"
  };
  return (
    <div className="App">
    <Router>
      <nav className="navigation">
        <div className="nav_upper">
          <div className="blooddrop">
            <img src={bloodbank} alt="bloodbank" style={avatar_stylings}/>
          </div>
        </div>
        <div className="nav_lower">
          <div className="nav_links">
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/bloodbank" className="nav_link">Bloodbank</Link>
            <Link to="/adminlogin" className="nav_link">Admin login</Link>
            <Link to="/adminregister" className="nav_link">Admin register</Link>
          </div>
        </div>
      </nav>
      <div className="content">
            <Route path="/" exact="true" component={Home}/>
            <Route path="/bloodbank" exact="true" component={Bloodbank}/>
            <Route path="/devteam" exact="true" component={Devteam}/>
            <Route path="/adminlogin" exact="true" component={Adminlogin}/> 
            <Route path="/adminregister" exact="true" component={Adminregister}/> 
            <Protected path="/hospitals" exact="true" component={Hospitalsdetails}/>
            <Protected path="/results" exact="true" component={Results}/>
      </div>
      </Router>
    </div>
  );
}

export default App;
