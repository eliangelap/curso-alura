import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function CadastroVideo() {
	return (
		<PageDefault>
			<h1>Cadastro de Vídeo</h1>

			{/* <Button variant="contained"> */}
			<Link to="/cadastro/categoria">Cadastrar Categoria</Link>
			{/* </Button> */}
		</PageDefault>
	);
}

export default CadastroVideo;