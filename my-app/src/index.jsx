import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './index.css';
// import App from './Aula1/App';
// import App from './Aula2/App';
import ListagemAlunos from './Aula3/pages/ListagemAlunos';
import Tabela from './Aula2/pages/material/Tabela';
import Cadastro from './Aula3/pages/Cadastro';
import NavBar from './components/NavBar';

const Routes = () => {
    const routes = useRoutes([
        { path: '/', element: <ListagemAlunos /> },
        { path: '/cadastro', element: <Cadastro /> },
    ]);

    return routes;
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar />
            {/* <App /> */}
            <Routes />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
