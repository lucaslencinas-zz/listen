import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import Home from '../components/Home';

const Router = () => (
  <div>
    <Route
      exact path="/"
      component={Home}
    />
  </div>
);

export default Router;
