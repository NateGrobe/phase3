import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Employees from './components/Employees';
import Patients from './components/Patients';
import Nav from './components/Nav';
import Billing from './components/Billing';
import Covid from './components/Covid';
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

        <div className="grid-1-1">
          <div className="titlePage">
            Hospital Tech Industries
          </div>
          <div className="LogIn">
                Log in
          </div>
          <div className="titleLower">
            Already have a Hospital Tech Account?
          </div>
          <div className="titleLogin">
            Log In
          </div>
        </div>
          
        <Route path='/covid'>
          <Covid />
        </Route>
        {/* this bit should display a nice welcome page */}
        <Route path='/'>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
