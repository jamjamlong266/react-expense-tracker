import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import 'firebase/auth';
import { useUser } from 'reactfire';

import About from './pages/About';
import Login from  './pages/Login';
import Expenses from "./pages/expenses";

const MainRouter = () => {
  return (
    <Router>
        <Switch>
        <PrivateRoute exact path="/">
            <Expenses />
        </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <NoAuthOnlyRoute path="/login">
            <Login />
          </NoAuthOnlyRoute>
        </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  
  const isAuthenticated = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
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

function NoAuthOnlyRoute({ children, ...rest }) {
  
  const isAuthenticated = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default MainRouter;