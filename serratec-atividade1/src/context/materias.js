import { createContext, useState } from "react";

const MateriasContext = createContext();

const MateriasProvider = ({ children }) => {

    const [materias, setMaterias] = useState([]);

    return (
        <MateriasContext.Provider value={{
            materias,
            setMaterias
        }}>
            {children}
        </MateriasContext.Provider >
    )
}

export { MateriasContext, MateriasProvider };