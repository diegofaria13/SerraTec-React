import * as React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
	Form,
	InputCadastro,
	ButtonCadastro,
} from "../../components/Cadastros";
import { API_MATERIAS } from "../../constants";
import axios from "axios";
import { useState } from "react";

const CadastrarMateria = () => {
	const MySwal = withReactContent(Swal);

	const [titulo, setTitulo] = useState();
	const [professor_nome, setProfessor_nome] = useState();

	const cadastrar = () => {
		axios
			.post(API_MATERIAS, {
				titulo,
				professor_nome,
			})
			.then((response) => {
				if (response.status == 201) {
					//IRÁ PEGAR A MESSAGEM DE SUCESSO QUE VEM DIRETO DA API;
					MySwal.fire({
						icon: "success",
						title: "Sucesso!",
						text: response?.data?.message,
					});
					//APÓS A MENSAGEM DE SUCESSO IRÁ ATIVAR A FUNÇÃO
					//LIMPAR CAMPOS QUE DA UM SET NULL PARA OS IMPUT
					limparCampos();
				}
			})
			.catch((error) => {
				MySwal.fire({
					icon: "error",
					title: "Vish",
					text: error,
				});
			});
	};

	//FUNCAO PARA
	const limparCampos = () => {
		setTitulo("");
		setProfessor_nome("");
	};

	return (
		<Form>
			<InputCadastro
				id="outlined-basic"
				label="titulo"
				//É CRIADO O VALUE PARA FUNCIONAR COM A FUNÇÃO LIMPARCAMPO
				//PARA RECEBER TBM AQUILO QUE VEM DO ESTADO
				value={titulo}
				variant="outlined"
				onChange={(e) => setTitulo(e.target.value)}
			/>
			<InputCadastro
				id="outlined-basic"
				label="Professor"
				//É CRIADO O VALUE PARA FUNCIONAR COM A FUNÇÃO LIMPARCAMPO
				//PARA RECEBER TBM AQUILO QUE VEM DO ESTADO
				value={professor_nome}
				variant="outlined"
				onChange={(e) => setProfessor_nome(e.target.value)}
			/>
			<ButtonCadastro variant="contained" onClick={cadastrar}>
				Cadastrar
			</ButtonCadastro>
		</Form>
	);
};

export default CadastrarMateria;
