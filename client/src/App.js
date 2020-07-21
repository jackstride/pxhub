import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Index';
import Login from './pages/Login';
import Application from './pages/Application';
import Protected from './Helpers/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Protected path="/app">
          <Application />
        </Protected>
      </Switch>
    </Router>
  );
}

export default App;
