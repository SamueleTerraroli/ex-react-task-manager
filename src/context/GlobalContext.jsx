import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_API_URL

    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`${apiUrl}/tasks`)
            .then((res) => res.json())
            .then((data) => {
                console.log("task ricevuti:", data);
                setTasks(data)
            })
            .catch((error) => console.error("Errore nel fetch dei task:", error))
    }, [])

    const value = {
        tasks,
        setTasks
    }

    return (
        <GlobalContext.Provider value={value}>
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