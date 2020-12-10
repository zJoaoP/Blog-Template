import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from 'views/NotFound';
import Home from 'views/Home';

import GlobalStyle from 'GlobalStyle';

/*
  1. Styles
  2. Router
  3. Tests
  4. Redux
*/

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
