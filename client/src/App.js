import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Employees from './components/Employees';
import Patients from './components/Patients';
import Nav from './components/Nav';
import Billing from './components/Billing';
import viewServices from './services/viewServices';

const App = () => {
  const [data, setData] = useState(null);

  async function getView() {
    const data = await viewServices.view1();
    setData(data);
  }

  useEffect(() => {
    getView();
  }, []);

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
        {/* this bit should display a nice welcome page */}
        <Route path='/'>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
