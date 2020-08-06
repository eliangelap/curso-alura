import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

function NotFound() {
  return (
    <PageDefault>
      <h1>404 - Not Found</h1>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default NotFound;
