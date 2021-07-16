import logo from './logo.svg';
// import './App.css';

import { Login } from "./pages/Login";
import { BrowserRouter as Router, Route ,Link,Switch} from "react-router-dom";
import { LandOfficerReg } from './pages/LandOfficerReg';
import { FinanceOfficerReg } from './pages/FinanceOfficerReg';
import { UserRegistration } from './pages/UserRegistration';
import { Nav } from 'react-bootstrap';

//import { Navigation, Footer, Home, About, Register, Login1, Contact } from "./homepage";
import { MyAppHomePage} from "./landverificationofficer/MyAppHomePage ";
import { DocsVerificationPage} from "./landverificationofficer/DocsVerificationPage";
import { StatusPage} from "./landverificationofficer/StatusPage";
import { ViewCustomerPage} from "./landverificationofficer/ViewCustomerPage";
import { Navigations } from './landverificationofficer/Navigations';
import { Footers } from "./landverificationofficer/Footers";

import { admin } from "./admin/admin";
import { ViewAllCustomer} from "./admin/view-all-customer";
import { ViewCustomerById} from "./admin/view-customer-by-id";
import { DeleteById} from "./admin/delete-customer-by-id"
import { AppNav } from "./admin/AppNav";
import { Footer } from "./admin/Footer";

function App() {
  return (
  //<div className="App">

  
    <Router>

      {/* swetha */}
  {/* <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component= {Register} />
          <Route exact path="/login1" component= {Login1 } />
          <Route exact path="/contact" component= {Contact } />
        </Switch>
        <Footer /> */}

      {/* lakshmi */}
      {/* <Route exact path="/" component={UserReg} /> */}
      <Route exact path="/Login" component={Login} />
      <Route exact path="/User-Registration" component={UserRegistration} />
      
      <Route exact path="/LandOfficer-reg" component={LandOfficerReg} />
      <Route exact path="/FinanceOfficer-reg" component={FinanceOfficerReg} />
      
      {/* muskan */}
      <Route exact path="/" component={MyAppHomePage} />
      <Route exact path="/home" component={MyAppHomePage} />
      <Route exact path="/viewcustomer" component={ViewCustomerPage} />
      <Route exact path="/docsverification" component={DocsVerificationPage} />
      <Route exact path="/status" component={StatusPage} />

       {/* rohit */}
      <Router>
      <Route exact path="/admin" component={admin} />
      <Route exact path="/viewAll" component={ViewAllCustomer} />
      <Route exact path="/viewbyId" component={ViewCustomerById} />
      <Route exact path="/delete" component={DeleteById} />
    </Router>
     
    </Router>
    // </div>
  );
  };
export default App;
