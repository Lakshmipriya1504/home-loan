import React from 'react';

export function UserRegistration() {
    return (
      
        <div className="row bg-secondary d-flex align-items-center"
        style={{height: "100vh"}}>
           

          <div className="col-md-4 col-sm-4 col-xs-12"> </div>
            <div className="col=md-4 col-sm-4 col-xs-12">
              <form>
                 <h1 className="bg-dark text-light p-3">User Registration</h1>
             
                 <div className="form-group">
                   <label>Enter UserId</label>
                   <input type="userid" className="form-control"placeholder="Enter userid" />
                 </div>
                 <div className="form-group">
                   <label> Enter Password</label>
                  <input type="password" className="form-control" placeholder=" Enter password" />
                 </div>
                 <div className="form-group">
                   <label>Re-type Password</label>
                   <input type="password" className="form-control"placeholder="Enter password" />
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
               
                 <input type="button" className="bg-dark text-light p-3" value="Register" />
                 
              </form>
            </div>
     </div>
    );
    

};