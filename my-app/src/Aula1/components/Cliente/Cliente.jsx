import Botao from '../Botao/Botao'
import { Div, H1, P} from './Style';


const Cliente = (props) => {

    return(
        <Div>
            <H1>Dados do Cliente</H1>
            <P>Nome: {props.nome}</P>
            <P>Idade: {props.idade}</P>
            <Botao>Cadastrar</Botao>
            <Botao>Remover</Botao>
        </Div>
    )
}

export default Cliente;