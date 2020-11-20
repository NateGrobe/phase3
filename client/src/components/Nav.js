import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/patients'>Patients</Link>
      <Link to='/employees'>Employees</Link>
      <Link to='/Billing'>Billing</Link>
    </div>
  );
};

export default Nav;
