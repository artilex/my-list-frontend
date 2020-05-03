import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMeAction } from './redux/actions/auth';
import { Header } from './components';
import ApiService from './api';
import './App.css';
import {
  PublicHomePage,
  HistoryPage,
  AdminHomePage,
  LoginPage
} from './pages';

function App() {
  const { isAuth } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    ApiService.get('/user')
    .then((response) => {
      const {id, email} = response.data;
      dispatch(getMeAction(id, email));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Router>
      <Header />

      <div className='wrapper'>
        <Switch>
          <Route path='/' exact component={PublicHomePage} />
          <Route path='/history' exact component={HistoryPage} />
          <Route
            path='/login'
            exact
            component={() => <LoginPage isAuth={isAuth} />}
          />

          <Route 
            path='/admin'
            component={() => <AdminHomePage isAuth={isAuth} />}
            isAuth={isAuth}
          />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
