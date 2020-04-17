import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Public/Home';
import Header from '../components/Header/index'

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
