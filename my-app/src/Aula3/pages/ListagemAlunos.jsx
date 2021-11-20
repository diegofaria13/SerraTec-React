import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ListagemAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        axios
            .get('https://secret-headland-69654.herokuapp.com/alunos')
            .then((response) => {
                setAlunos(response.data);
            });
    }, []);

    return (
        <>
            <Container maxWidth="md" sx={{ marginTop: '35px' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Nome</StyledTableCell>
                                <StyledTableCell align="center">
                                    Idade
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    Cidade
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alunos.map((aluno) => (
                                <TableRow key={aluno.nome}>
                                    <TableCell>{aluno.nome}</TableCell>
                                    <TableCell align="center">
                                        {aluno.idade}
                                    </TableCell>
                                    <TableCell align="center">
                                        {aluno.cidade}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            );
        </>
    );
};

export default ListagemAlunos;
