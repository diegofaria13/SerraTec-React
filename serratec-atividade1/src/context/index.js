import { AlunosProvider } from "./alunos"
import { MateriasProvider } from "./materias";

const GlobalContext = ({ children }) => {

    return <AlunosProvider><MateriasProvider> {children} </MateriasProvider></AlunosProvider >
}

export default GlobalContext;