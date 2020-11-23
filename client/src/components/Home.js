import React, { useState } from 'react';

const Home = () => {
  const [login, setLogin] = useState(false);
  const [eid, setEid] = useState('');
  const [epass, setEpass] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const showLogin = () => setLogin(true);

  function handleSignIn(event) {
    event.preventDefault();
    if (eid.length > 0 && epass === 'pass') {
      window.alert("Welcome!");
      setLogin(false);
      setEid('');
      setEpass('');
      setSignedIn(true);
    } else {
      window.alert("Invalid username or password.");
      setEpass('');
    }
  }

  const loginForm = () => {
    return (
      <form onSubmit={handleSignIn}>
        Employee ID: <input value={eid} onChange={({ target }) => setEid(target.value)}/>
        <br/>
        Password: <input type='password' value={epass} onChange={({ target }) => setEpass(target.value)}/>
        <br/>
        <button type='submit'>Sign in</button>
      </form>
    );
  };

  return (
    <div className="grid-1-1">
      {login === false &&
        <div>
        <div className="titlePage">
          Hospital Tech Industries
        </div>
          {signedIn === false &&
          <div className="LogIn" onClick={showLogin}>
              Log in
          </div>}

          {signedIn === true &&
            <div>
              Welcome
            </div>
          }

        </div>
        }
      {login === true && loginForm()}
    </div>
  );
};

export default Home;
