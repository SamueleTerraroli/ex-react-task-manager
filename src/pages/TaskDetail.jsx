import { useParams, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useState } from "react";
import Modal from "../components/Modal";

const TaskDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const { tasks, removeTask } = useGlobalContext();

    const task = tasks.find(t => t.id === parseInt(id));
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        try {
            await removeTask(task.id);
            alert('Task eliminata!')
            navigate('/')
        } catch {
            console.error(error);
            alert(error.message);
        }
    }

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

            <button onClick={(() => setShowModal(true))}>Elimina</button>

            <Modal
                title='Elimina task'
                content={<p>Sei sicuro di voler eliminare la task?</p>}
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
                confirmText="elimina"
            />

        </div>
    )
}

export default TaskDetail