import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import New from './pages/new';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} />
      <Route path="/new" exact component={New} />
    </Switch>
  );
}
