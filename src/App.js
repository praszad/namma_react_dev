import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/Login/LoginComponent';
import HomeComponent from './components/Home/HomeComponent';
import PublicRouter from './utility/routers/PublicRouter';
import PrivateRouter from './utility/routers/PrivateRouter';
import SignUpComponent from './components/SignUp/SignUpComponent';
function App() {
  return (
    <Router>
      <Switch>
        <PublicRouter path='/login' exact Component={LoginComponent} />
        <PublicRouter path='/signup' exact Component={SignUpComponent} />
        <PrivateRouter path='/home' exact Component={HomeComponent} />
        <PrivateRouter path='/' exact Component={HomeComponent} />
        <Route path='*' component={LoginComponent} />
      </Switch>
    </Router>
  );
}

export default App;
