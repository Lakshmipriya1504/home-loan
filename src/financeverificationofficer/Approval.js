import { Jumbotron } from "react-bootstrap"
import { AppNavs } from "../financeverificationofficer/AppNavs"
import Footer from "../admin/Footer"

export function Approval() {
  return (
    <div className="App-header1">
      <AppNavs/>
      <div className="container">
        <Jumbotron>
        <h1>approval will be shown</h1>
        </Jumbotron>
        
      </div>
      <Footer/>
    </div>
  );
}