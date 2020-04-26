import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  PublicHomePage,
  HistoryPage,
  AdminHomePage,
} from './pages';

function App() {
  /*const login = useSelector(state => state.loginReducer);
  const adminPage = <Route path='admin' component={AdminPage} />;
*/
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={PublicHomePage} />
          <Route path='/history' exact component={HistoryPage} />
          <Route path='/admin' component={AdminHomePage} />
        </Switch>
    </Router>
  );
}

export default App;
