import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorization from '../Auth';
import HomeComponent from '../../components/Home/HomeComponent';

export default function PublicRouter({ Component, ...rest }) {
  if (Authorization.isLogin()) {
    return <Redirect to='/' />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
}
