import { AlunosProvider } from "./alunos"

const GlobalContext = ({ children }) => {

    return <AlunosProvider> {children} </AlunosProvider>
}

export default GlobalContext;