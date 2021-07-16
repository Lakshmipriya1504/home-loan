import { Dropdown } from "react-bootstrap";
import Footer from "../admin/Footer";
import { AppNavs } from "./AppNavs";


export function Status() {
  return (
    <div>
      <AppNavs/>
    <Dropdown className="App-header2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        --Select Status--
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Pending</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Approved</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Waiting</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Footer/>
    </div>
  );
}