import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import ComoFunciona from './pages/ComoFunciona/ComoFunciona';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/quem-somos" component={QuemSomos} />
      <Route path="/como-funciona" component={ComoFunciona} />
    </Switch>
  );
}

export default Routes;