import { createContext, useContext, } from "react";
import useTasks from "../hooks/useTasks";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const taskData = useTasks();

    return (
        <GlobalContext.Provider value={{ ...taskData }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export {
    useGlobalContext,
    GlobalProvider
}