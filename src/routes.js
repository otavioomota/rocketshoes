import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/" component={Cart} />
    </Switch>
  );
};

export default routes;
