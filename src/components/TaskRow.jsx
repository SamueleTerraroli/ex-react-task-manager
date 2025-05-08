import React from 'react';

const TaskRow = React.memo(({ task }) => {
    return (
        <tr>
            <td>{task.title}</td>
            <td className={`status-${task.status.toLowerCase()}`}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString('it-IT', {
                day: '2-digit', month: 'long', year: 'numeric'
            })}</td>
        </tr>
    );
});

export default TaskRow;