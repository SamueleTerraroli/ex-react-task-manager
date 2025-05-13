import React from 'react';
import { Link } from 'react-router-dom';

const TaskRow = React.memo(({ task }) => {
    return (
        <tr>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td className={`status-${task.status.toLowerCase()}`}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString('it-IT', {
                day: '2-digit', month: 'long', year: 'numeric'
            })}</td>
        </tr>
    );
});

export default TaskRow;