import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Menu.css";
import { Button } from "@material-ui/core";
import routes from "../components/Routes";

function Menu(props) {
	return (
		<nav className="Menu" >
			<Link to={routes.home} >
				<img className="Logo" src={logo} alt="Logo ELIFLIX"></img>
			</Link>

			<Button variant="contained" component={Link} to={routes.cadastroVideo}>
				Novo Vídeo
			</Button>
		</nav>
	);
}

export default Menu;