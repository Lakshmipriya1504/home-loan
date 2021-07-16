import React from "react";
import { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createUserAction } from "../redux/store";

export const Register = ()=> {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const formEl = useRef();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const addNewUser = (e) => {
    e.preventDefault();
    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
    dispatch(
      createUserAction({
          userId,
          password,
          role,
      })
    );

    setUserId("");
    setPassword("");
    setRole("");
    }
    else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };


  return (
    <MDBContainer>
    <br></br>
    <br></br>
    <MDBRow>
      <MDBCol md="5">
        <MDBCard>
          <MDBCardBody>
           <form className="needs-validation"
          ref={formEl}
          noValidate>
              <h1 className="bg-dark text-light p-3">
                Register Form</h1>
              
              <div className="form-group">
                <label>User Id</label>
                <input type="text" 
                className="form-control"
                value={userId}
                onChange={updateUserId}
                placeholder="User Id" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" 
                value={password}
                onChange={updatePassword}
                className="form-control" 
                placeholder="Enter Password" />
                </div>
                <div>
                <label>Select Role</label>
                <select className="form-control" onChange={updateRole}>
                <option value="select role">-Select Role-</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                  <option value="landofficer">Land Officer</option>
                  <option value="financeofficer">Finance Officer</option>
                </select>
                </div>
                <br></br>
                <input 
                type="button"  
                onClick={addNewUser}
                className="btn btn-dark text-light " 
                value="Register" />
           </form>
     </MDBCardBody>
    </MDBCard>
  </MDBCol>
  </MDBRow>
  </MDBContainer> 
  );
};