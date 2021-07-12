import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
     <div className="row">
       <div className="col-md-4 col-sm-4 col-xs-12"> </div>
       <div className="col=md-4 col-sm-4 col-xs-12">
         <form>
            <h1 className="bg-dark text-light p-3">Login Form </h1>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-control"placeholder="Enter Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group">
              <label>Select Role</label>
              <input type="select role" className="form-control" placeholder="select role" />
              <div class="dropdown">
  <button class="dropdown-toggle" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  </div>
              
              </div>
              <input type="button" className="bg-dark text-light p-3" value="Login" />
         </form>
        </div>
      </div>
   </div>
  );
  };
export default App;
