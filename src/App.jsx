import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./defaultLayout/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<TaskList />} />
          <Route path="addtask" element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
