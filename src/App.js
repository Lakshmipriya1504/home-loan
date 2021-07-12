import logo from './logo.svg';
import './App.css';

import { Login } from "./loginpage/Login";
import { Landofficer } from "./landofficer-reg/Landofficer"; 
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Land-officer" component={Landofficer} />
    </Router>
  );
  };
export default App;
