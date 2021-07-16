import { Button } from "bootstrap";
import { Spinner } from "react-bootstrap";

import { AppNavs } from "../financeverificationofficer/AppNavs";
import Footer from "./Footer";


export function ViewCustomer() {
  return <div className="App-header">
    <AppNavs/>
    <h1 className="alert alert-dark">customers by Deepak</h1>
    <Footer/>
    </div>;
   
}