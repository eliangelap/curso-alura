import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CadastroCategoria from "./pages/cadastro/Categoria";
import CadastroVideo from "./pages/cadastro/Video";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/Home" component={Home} exact />
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route component={NotFound} />
		</Switch>

	</BrowserRouter>,
	document.getElementById("root")
);
