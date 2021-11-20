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

const Tabela = () => {
    const alunos = [
        {
            nome: 'Fio',
            idade: 28,
            cidade: 'Nova Friburgo',
        },
        {
            nome: 'Gal',
            idade: 25,
            cidade: 'Teresópolis',
        },
        {
            nome: 'Samuel',
            idade: 20,
            cidade: 'Nova Friburgo',
        },
    ];

    return (
        <Container maxWidth="md">
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
};

export default Tabela;
