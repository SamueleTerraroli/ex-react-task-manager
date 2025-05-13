import { useParams, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { useState } from "react";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

const TaskDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const { tasks, removeTask, updateTask } = useGlobalContext();

    const task = tasks.find(t => t.id === parseInt(id));
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

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

    const handleUpdate = async (updatedTask) => {
        try {
            await updateTask(updatedTask); // Passa direttamente updatedTask a updateTask
            setShowEditModal(false);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

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
            <button onClick={(() => setShowEditModal(true))}>Modifica Task</button>


            <Modal
                title='Elimina task'
                content={<p>Sei sicuro di voler eliminare la task?</p>}
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
                confirmText="elimina"
            />

            <EditTaskModal
                task={task}
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleUpdate}

            />



        </div>
    )
}

export default TaskDetail