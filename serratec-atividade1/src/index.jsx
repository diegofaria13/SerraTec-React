import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import AlunosListagem from "./pages/alunos/AlunosListagem";
import CadastrarAlunos from "./pages/alunos/CadastrarAlunos";
import CadastrarMateria from "./pages/materias/CadastrarMateria";
import MateriasListagem from "./pages/materias/MateriasListagem";
import { AlunosProvider } from "./context/index";

const Routes = () => {
	const routes = useRoutes([
		{ path: "/", element: <AlunosListagem /> },
		{ path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
		{ path: "/cadastrar-materia", element: <CadastrarMateria /> },
		{ path: "/lista-materias", element: <MateriasListagem /> },
		{ path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
	]);

	return routes;
};

ReactDOM.render(
	<React.StrictMode>
		<AlunosProvider>
			<BrowserRouter>
				<Navbar />
				<Container maxWidth="md">
					<Routes />
				</Container>
			</BrowserRouter>
		</AlunosProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
