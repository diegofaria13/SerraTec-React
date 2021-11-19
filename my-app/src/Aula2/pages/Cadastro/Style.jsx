import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    background-color: #D6C9E3;
    max-width: 90%;
    text-align: center;
    padding: 20px;
`;

export const Input = styled.input`
    width: 150px;
    height: 30px;
    border-radius: 15px;
    border-style: none;
    margin: 5px;

    /* ${(props) => props.isActive && `
    border: 3px solid green`} */
    
`;


export const Button = styled.button`
    background-color: aliceblue;
    height: 30px;
    border-color: #db7cd7;
    border-style: solid;
    border-radius: 15px;
`;

