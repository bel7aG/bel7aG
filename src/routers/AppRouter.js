import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, About, Portfolio, NotFound } from '../components';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
