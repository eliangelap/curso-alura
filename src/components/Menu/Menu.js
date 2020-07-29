import React from "react";
import logo from "../../assets/img/logo.png";
import "./Menu.css";
// import ButtonLink from "../components/ButtonLink/ButtonLink";
import Button from "../Button";

function Menu(props) {
	return ( 
		<nav className = "Menu" >
			<a href = "/home" >
				<img className = "Logo" src={logo} alt="Logo ELIFLIX"></img> 
			</a>

			<Button as="a" className="ButtonLink" href="/home">Novo Vídeo</Button>
		</nav>
	);
}

export default Menu;