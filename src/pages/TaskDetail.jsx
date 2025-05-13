import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

const TaskDetail = () => {

    const { id } = useParams();
    const { tasks } = useGlobalContext();

    const task = tasks.find(t => t.id === parseInt(id));

    const handleDelete = console.log(`Task con id ${task.id} eliminata!`)

    if (!task) {
        return (
            <h1>Task non trovata</h1>
        )
    }
    return (
        <div>
            <h1>Dettaglio della task</h1>
            <p><strong>Nome:</strong>{task.title}</p>
            <p><strong>Descrizione:</strong>{task.description}</p>
            <p><strong>Stato:</strong>{task.status}</p>
            <p><strong>Data di creazione:</strong>{new Date(task.createdAt).toLocaleDateString('it-IT', {
                day: '2-digit', month: 'long', year: 'numeric'
            })}</p>

            <button onClick={handleDelete}>Elimina</button>

        </div>
    )
}

export default TaskDetail