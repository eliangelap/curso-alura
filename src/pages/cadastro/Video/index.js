import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import PageDefault from '../../../components/PageDefault';
import routes from '../../../components/components/Routes';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <Button variant="contained" component={Link} to={routes.cadastroCategoria}>
        Cadastrar Categoria
      </Button>
    </PageDefault>
  );
}

export default CadastroVideo;
