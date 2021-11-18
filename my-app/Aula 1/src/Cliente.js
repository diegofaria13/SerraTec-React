import Botao from './Botao';
import BotaoClasse from './BotaoClasse';

const Cliente = ({ nome }) => {
  return (
    <div style={{ backgroundColor: "aqua" }}>
      <h1>Dados do cliente</h1>
      <p>Nome: {nome}</p>
      
      
      
      <Botao>Cadastrar</Botao>
      <Botao>Editar</Botao>
      <BotaoClasse>Deletar</BotaoClasse>


    </div>
  );
};

export default Cliente;
