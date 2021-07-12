import React from 'react';

export function Login() {
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
              <input type="password" className="form-control" placeholder="Enter Password" />
              </div>
              <div>
              <label>Select Role</label>
              <select className="form-control">
              <option value="select role">-Select Role-</option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="landofficer">Land Officer</option>
                <option value="Financeofficer">Finance Officer</option>
              </select>
              </div>
              <input type="button" className="bg-dark text-light p-3" value="Login" />
         </form>
        </div>
      </div>
   </div> 
        
    );
};

