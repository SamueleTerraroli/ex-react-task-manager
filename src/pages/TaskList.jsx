import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const TaskList = () => {
    const context = useGlobalContext();
    console.log(useGlobalContext());
    return (
        <div>TaskList</div>
    )
}

export default TaskList