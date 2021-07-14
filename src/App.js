import logo from './logo.svg';
import './App.css';

import { Login } from "./pages/Login";
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import { LandOfficerReg } from './pages/LandOfficerReg';
import { FinanceOfficerReg } from './pages/FinanceOfficerReg';
import { UserRegistration } from './pages/UserRegistration';


import { MyAppHomePage } from "./landverificationofficer/MyAppHomePage ";
import { ViewCustomerPage } from "./landverificationofficer/ViewCustomerPage";
import { DocsVerificationPage } from "./landverificationofficer/DocsVerificationPage";
import {StatusPage } from "./landverificationofficer/StatusPage";




function App() {
  return (
    <Router>
 <div className="bg-dark text-light p-4 mb-2 d-flex justify-content-between">
        <Link to="/home">
          <h3 className="text-light">Home</h3>
        </Link>
        <Link to="/explore">
          <h3 className="text-light">View Customer</h3>
        </Link>
        <Link to="/notification">
          <h3 className="text-light">Docs. Verification</h3>
        </Link>
        <Link to="/message">
          <h3 className="text-light">Status</h3>
        </Link>


        <Link to="/changestatus">
          <h3 className="text-light">ChangeStatus</h3>
        </Link>
       
      </div>



      {/* <Route exact path="/" component={UserReg} /> */}
      <Route exact path="/Login" component={Login} />
      <Route exact path="/User-Registration" component={UserRegistration} />
      
      <Route exact path="/LandOfficer-reg" component={LandOfficerReg} />
      <Route exact path="/FinanceOfficer-reg" component={FinanceOfficerReg} />
      

      {/* <Route exact path="/" component={MyAppHomePage} /> */}
      <Route exact path="/home" component={MyAppHomePage} />
      <Route exact path="/explore" component={ViewCustomerPage} />
      <Route exact path="/notification" component={DocsVerificationPage} />
      <Route exact path="/message" component={StatusPage} />


     
    </Router>
  );
  };
export default App;
