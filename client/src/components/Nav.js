import React from 'react';
import { useHistory } from "react-router-dom";
import "../styleFile.css";

const Nav = () => {

    let history = useHistory();

    function linkHome() {
      history.push('/');
    }

    function linkPatients() {
      const loggedUser = window.localStorage.getItem('loggedUser');
      if (!loggedUser){
        history.push('/');
        window.alert('Please log in');
      } else {
        history.push('/patients');
      }
    }

    function linkEmployees() {
      const loggedUser = window.localStorage.getItem('loggedUser');
      if (!loggedUser){
        history.push('/');
        window.alert('Please log in');
      } else {
        history.push("/employees");
      }
    }

    function linkBilling() {
      const loggedUser = window.localStorage.getItem('loggedUser');
      if (!loggedUser){
        history.push('/');
        window.alert('Please log in');
      } else {
        history.push("/billing");
      }
    }

    function linkCovid() {
      const loggedUser = window.localStorage.getItem('loggedUser');
      if (!loggedUser){
        history.push('/');
        window.alert('Please log in');
      } else {
        history.push("/covid");
      }
    }


  return (
    <div>
          <ul className="navBar sticky">
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
                <span onClick={linkCovid}>COVID-19</span>
            </li>
          </ul>
          <div className="padding">

          </div>
    </div>
  );
};

export default Nav;
