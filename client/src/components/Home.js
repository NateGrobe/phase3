import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [login, setLogin] = useState(false);
  const [eid, setEid] = useState('');
  const [epass, setEpass] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  let history = useHistory();

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser');
    if (loggedUser) {
      setLogin(false);
      setSignedIn(true);
      setCurrentUser(loggedUser);
    }
  }, []);

  const showLogin = () => setLogin(true);

  function handleSignIn(event) {
    event.preventDefault();
    if (eid.length > 0 && epass === 'pass') {
      setLogin(false);
      window.localStorage.setItem('loggedUser', eid);
      setCurrentUser(eid);
      setEid('');
      setEpass('');
      setSignedIn(true);
    } else {
      window.alert("Invalid username or password.");
      setEpass('');
    }
  }

  function handleSignOut() {
    window.localStorage.removeItem('loggedUser');
    setSignedIn(false);
    history.push('/');
  }

  const loginForm = () => {
    return (
      <form onSubmit={handleSignIn}>
        Employee: <input type="text" value={eid} onChange={({ target }) => setEid(target.value)}/>
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
              <div className="welcome">
                Welcome back {currentUser}
              </div>
              <button onClick={handleSignOut}>Signout</button>
            </div>
          }

        </div>
        }
      {login === true && loginForm()}
    </div>
  );
};

export default Home;
