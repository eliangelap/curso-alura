import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/components/FormField';
import routes from '../../../components/components/Routes';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categoria, setCategoria] = useState(initialValues);
  const [categorias, setCategorias] = useState([]);

  function setValue(key, value) {
    setCategoria({
      ...categoria,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([
      ...categorias,
      categoria,
    ]);
    setCategoria(initialValues);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {categoria.nome}
      </h1>

      <form onSubmit={(e) => {
        handleSubmit(e);
      }}
      >

        <Grid container spacing={3}>
          <Grid item lg={4} xs={12} md={6}>
            <FormField
              type="text"
              label="Nome da Categoria"
              value={categoria.nome}
              name="nome"
              onChange={(e) => { handleChange(e); }}
              required
            />
          </Grid>
          <Grid item lg={4} xs={12} md={6}>
            <FormField
              type="textarea"
              label="Descrição"
              value={categoria.descricao}
              name="descricao"
              onChange={(e) => { handleChange(e); }}
              required
            />
          </Grid>
          <Grid item lg={2} xs={12} md={6}>
            <FormField
              type="color"
              label="Cor"
              value={categoria.cor}
              name="cor"
              onChange={(e) => { handleChange(e); }}
              required
            />
          </Grid>
          <Grid item lg={12}>
            <Button variant="contained" type="submit" color="primary">Cadastrar</Button>
          </Grid>
        </Grid>
      </form>

      <ul>
        {categorias.map((cat) => (
          <li key={cat.nome}>
            {cat.nome}
          </li>
        ))}
      </ul>

      <Link to={routes.home}>Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
