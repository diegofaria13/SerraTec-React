import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";

export default function ButtonAppBar() {
	function HomeIcon(props) {
		return (
			<SvgIcon {...props}>
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
			</SvgIcon>
		);
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Link to="/">
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<HomeIcon fontSize="large" />
						</IconButton>
					</Link>
					<Link to="/cadastrar-alunos">
						<Button color="inherit">Cadastro de Aluno</Button>
					</Link>
					<Link to="/cadastrar-materia">
						<Button color="inherit">Cadastro de Materias</Button>
					</Link>
					<Link to="/lista-materias">
						<Button color="inherit">Lista de Materias</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
