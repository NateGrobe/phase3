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
            <li className="grid-1-5">
                <span onClick={linkHome}>HOME</span>
            </li>
            <li className="grid-1-5">
                <span onClick={linkPatients}>PATIENTS</span>
            </li>
            <li className="grid-1-5">
                <span onClick={linkEmployees}>EMPLOYEES</span>
            </li>
            <li className="grid-1-5">
                <span onClick={linkBilling}>BILLING</span>
            </li>
            <li className="grid-1-5">
                <span onClick={linkBilling}>COVID-19</span>
            </li>
          </ul>
          <div className="padding">

          </div>
    </div>
  );
};

export default Nav;
