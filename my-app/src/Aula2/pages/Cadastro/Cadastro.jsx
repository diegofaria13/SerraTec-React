import { useState } from "react";
import { FormWrapper, Form, Input, Button } from "./Style";

const Cadastro = () => {

    // const [isActive, setIsActive] = useState();

    // const validar = (valor) => {
    //     if (valor === "123") setIsActive(true);
    // };

	return (
		<FormWrapper>
			<Form>
				<Input type="text" placeholder="Nome" />
				<Input type="text" placeholder="Cpf" /*isActive={isActive} onChange={(e) => validar(e.target.value)}*/ />

				<Button>Cadastrar</Button>
			</Form>
		</FormWrapper>
	);
};

export default Cadastro;
