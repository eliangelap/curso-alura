import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<PageDefault>
			<h1>404 - Not Found</h1>

			<Link to="/">Ir para Home</Link>
		</PageDefault>
	);
}

export default NotFound;