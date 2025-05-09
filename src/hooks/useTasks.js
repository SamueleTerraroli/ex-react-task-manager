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

    const addTask = async newTask => {
        const response = await fetch(`${VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });
        const { success, message, task } = await response.json();
        if (!success) throw new Error(message);

        setTasks(prev => [...prev, task])
    }
    const removeTask = () => {
        //rimuovere le task
    }
    const updateTask = () => {
        //modificare le task
    }
    return { tasks, addTask, removeTask, updateTask }
}