import Login from "../../pages/login/login";
import PageQuotes from "../../pages/page-quotes/page-quotes"

import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function Routers() {
  
  const [auth, setAuth] = useState(false);

  function onLogin() {
    setAuth(true);
  }

  return (
    <Router>
      <Switch>

      <Private exact path="/">
          <PageQuotes></PageQuotes>
        </Private>
        <Route exact path="/login">
          <Login onLogin={onLogin}></Login>
        </Route>
      </Switch>
    </Router>
  );


  function Private({ children, path }) {
    return (
      <Route
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

}

export default Routers;