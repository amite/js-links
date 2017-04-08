import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './views/home/home';

import Header from './components/header/header';

import { content } from './styles/app.pcss'

const renderApp = () => {
  ReactDOM.render((
    <Router>
      <article className={content} id="🛳">
        <Header title="Let's show some links" />
        <Route path="/" component={Home} />
      </article>
    </Router>
  ), document.getElementById('root'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./views/home/home', renderApp);
}

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');

  runtime.install({
    onUpdateReady: () => {
      // Tells to new SW to take control immediately
      runtime.applyUpdate();
    },
    onUpdated: () => {
      // Reload the webpage to load into the new version
      window.location.reload();
    },
  });
}
