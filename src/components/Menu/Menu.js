import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Menu.css";
// import ButtonLink from "../components/ButtonLink/ButtonLink";
import Button from "../Button";

function Menu(props) {
	return (
		<nav className="Menu" >
			<Link to="/Home" >
				<img className="Logo" src={logo} alt="Logo ELIFLIX"></img>
			</Link>

			<Button as={Link} className="ButtonLink" to="/cadastro/video">Novo Vídeo</Button>
		</nav>
	);
}

export default Menu;