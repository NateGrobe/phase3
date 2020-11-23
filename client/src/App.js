import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
import Patients from './components/Patients';
import Nav from './components/Nav';
import Billing from './components/Billing';
import Covid from './components/Covid';

const App = () => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/patients'>
          <Patients />
        </Route>
        <Route path='/employees'>
          <Employees />
        </Route>
        <Route path='/billing'>
          <Billing />
        </Route>
        <Route path='/covid'>
          <Covid />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
