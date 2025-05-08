import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./defaultLayout/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import { GlobalProvider } from "./context/GlobalContext"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<TaskList />} />
            <Route path="addtask" element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
