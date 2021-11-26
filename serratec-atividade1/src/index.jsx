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
// import { AlunosProvider } from "./context/alunos";
import GlobalContext from "./context";

const Routes = () => {
	const routes = useRoutes([
		{ path: "/", element: <AlunosListagem /> },
		{ path: "/cadastrar-alunos", element: <CadastrarAlunos /> },
		{ path: "/editar-alunos/:id", element: <CadastrarAlunos /> },
		{ path: "/cadastrar-materia", element: <CadastrarMateria /> },
		{ path: "/lista-materias", element: <MateriasListagem /> },
		{ path: "/editar-materias/:id", element: <CadastrarMateria /> },
	]);

	return routes;
};

ReactDOM.render(
	<React.StrictMode>
		{/* <AlunosProvider> */}
		<GlobalContext>
			<BrowserRouter>
				<Navbar />
				<Container maxWidth="md">
					<Routes />
				</Container>
			</BrowserRouter>
		</GlobalContext>
		{/* </AlunosProvider> */}
	</React.StrictMode>,
	document.getElementById("root")
);
