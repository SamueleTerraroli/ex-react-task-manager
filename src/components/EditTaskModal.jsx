import { useState, useRef } from "react";
import Modal from './Modal';
import { Form } from "react-router-dom";

const EditTaskModal = ({ show, onClose, task, onSave }) => {

    const [editTask, setEditTask] = useState(task || {});
    const changeFormRef = useRef();

    const changeEditTask = (key, e) => {
        setEditTask(prev => ({ ...prev, [key]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSave(editTask)
    }



    return (
        <Modal
            title='Modifica task'
            content={
                <form ref={changeFormRef} onSubmit={handleSubmit}>
                    <label>
                        Nome Task:
                        <input
                            type="text"
                            value={editTask.title}
                            onChange={e => changeEditTask('title', e)} />
                    </label>
                    <label>
                        Descrizione:
                        <textarea
                            value={editTask.description}
                            onChange={e => changeEditTask('description', e)} />
                    </label>
                    <label>
                        Stato:
                        <select
                            value={editTask.status}
                            onChange={e => changeEditTask('status', e)}>
                            {["TO do", "Doing", "Done"].map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </select>
                    </label>

                </form >
            }
            confirmText='Salva'
            show={show}
            onConfirm={() => changeFormRef.current.requestSubmit()}
            onClose={onClose}
        />
    )
}

export default EditTaskModal