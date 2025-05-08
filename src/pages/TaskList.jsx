import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

const TaskList = () => {
    const { tasks } = useGlobalContext();

    return (
        <div>
            <h2>Lista dei Task</h2>
            {tasks.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Stato</th>
                            <th>Data di Creazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>✨ Nessun task al momento. Aggiungine uno per iniziare! ✨</p>
            )}
        </div>
    );
};

export default TaskList;