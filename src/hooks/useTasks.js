import { useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;

export default function useTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
            .then((res) => res.json())
            .then((data) => {
                console.log("task ricevuti:", data);
                setTasks(data)
            })
            .catch((error) => console.error("Errore nel fetch dei task:", error))
    }, []);

    const addTask = () => {
        //aggiungere task
    }
    const removeTask = () => {
        //rimuovere le task
    }
    const updateTask = () => {
        //modificare le task
    }
    return { tasks, addTask, removeTask, updateTask }
}