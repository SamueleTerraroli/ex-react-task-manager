import { NavLink, Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Task List</NavLink>
                <NavLink to="/addtask">Add Task</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default DefaultLayout