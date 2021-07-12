import React from 'react';

export function Landofficer() {
    return (
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12"> </div>
            <div className="col=md-4 col-sm-4 col-xs-12">
              <form>
                 <h1 className="bg-primary text-light p-3">Registration Form</h1>
             
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
                 <input type="button" className="bg-primary text-light p-3" value="Register" />
              </form>
            </div>
     </div>
    );
    

};

