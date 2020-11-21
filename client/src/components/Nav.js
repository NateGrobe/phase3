import React from 'react';
import { useHistory } from "react-router-dom";
import "../styleFile.css";

const Nav = () => {

    let history = useHistory();

    function linkHome() {
      history.push("/");
    }
    function linkPatients() {
      history.push("/patients");
    }
    function linkEmployees() {
      history.push("/employees");
    }
    function linkBilling() {
      history.push("/Billing");
    }


  return (
    <div>
          <ul className="navBar">
            <li className="grid-1-4">
                <span onClick={linkHome}>HOME</span>
            </li>
            <li className="grid-1-4">
                <span onClick={linkPatients}>PATIENTS</span>
            </li>
            <li className="grid-1-4">
                <span onClick={linkEmployees}>EMPLOYEES</span>
            </li>
            <li className="grid-1-4">
                <span onClick={linkBilling}>BILLING</span>
            </li>
        </ul>


        

      
  
      {/* <Link to='/'>Home</Link>
      <Link to='/patients'>Patients</Link>
      <Link to='/employees'>Employees</Link>
      <Link to='/Billing'>Billing</Link> */}
    </div>
  );
};

export default Nav;
