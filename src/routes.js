import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} />
    </Switch>
  );
}
