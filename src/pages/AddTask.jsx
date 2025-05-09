import { useState, useRef, useMemo, } from 'react'
import { useGlobalContext } from '../context/GlobalContext';

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

const AddTask = () => {
    const { addTask } = useGlobalContext();
    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    const error = useMemo(() => {
        if (taskTitle.trim() === "") {
            return "Il nome del task non può essere vuoto.";
        }
        if ([...taskTitle].some(char => symbols.includes(char))) {
            return "Il nome del task non può contenere simboli speciali.";
        }
        return "";
    }, [taskTitle]);

    const handleSubmit = async event => {
        event.preventDefault();
        if (error)
            return;

        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        try {
            await addTask(newTask);
            alert("Task aggiunta!")
            setTaskTitle("");
            descriptionRef.current.value = "";
            statusRef.current.value = "";
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <h1>Aggiungi Task</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome Task:
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                </label>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <label>Descrizione:
                    <textarea ref={descriptionRef} />
                </label>
                <label>Stato:
                    <select ref={statusRef} defaultValue="To do">
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </label>
                <button type='submit' disabled={error}>
                    Aggiungi task
                </button>
            </form>
        </div>
    );
};

export default AddTask;