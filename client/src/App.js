import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const Test = () => <h1> Test App</h1>;
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
