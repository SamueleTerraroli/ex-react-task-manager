import { useState, useMemo, useCallback } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay)
    }
}

const TaskList = () => {
    const { tasks } = useGlobalContext();

    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState(1)

    const debounceSearch = useCallback(
        debounce(setSearch, 500)
        , [])

    const sort = (element) => {
        if (sortBy === element) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(element);
            setSortOrder(1);
        }
    }

    const icon = sortOrder === 1 ? "⬇" : "⬆";

    const sortedTask = useMemo(() => {
        return [...tasks].filter(task => task.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
            let comparison;

            if (sortBy === 'title') {
                comparison = a.title.localeCompare(b.title)
            } else if (sortBy === 'status') {
                const status = ["To do", "Doing", "Done"];
                comparison = status.indexOf(a.status) - status.indexOf(b.status)
            } else if (sortBy === 'createdAt') {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                comparison = dateA - dateB
            }

            return comparison * sortOrder;
        })
    }, [tasks, sortBy, sortOrder, search])

    return (
        <div>
            <h2>Lista dei Task</h2>
            <input
                type="text"
                placeholder='Cerca una task'
                onChange={e => debounceSearch(e.target.value)}
            />
            {tasks.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => sort('title')}>Nome {sortBy === "title" && icon}</th>
                            <th onClick={() => sort('status')}>Stato {sortBy === "status" && icon}</th>
                            <th onClick={() => sort('createdAt')}>Data di Creazione {sortBy === "createdAt" && icon}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTask.map(task => (
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