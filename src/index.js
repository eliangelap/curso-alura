import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';

import routes from './components/components/Routes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.cadastroVideo} component={CadastroVideo} />
      <Route path={routes.cadastroCategoria} component={CadastroCategoria} />
      <Route component={NotFound} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root'),
);
