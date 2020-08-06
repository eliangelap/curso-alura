import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './Menu.css';
import logo from '../../assets/img/logo.png';
import routes from '../components/Routes';

function Menu() {
  return (
    <nav className="Menu">
      <Link to={routes.home}>
        <img className="Logo" src={logo} alt="Logo ELIFLIX" />
      </Link>

      <Button className="ButtonLink" variant="contained" component={Link} to={routes.cadastroVideo}>
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
