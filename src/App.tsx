import { ThemeProvider } from "./components/providers/themeProvider"
import './App.css'
import { ModeToggle } from "./components/input-components/modeToggle"
import { UserProvider } from "./components/providers/UserProvider"
import { TaskManager } from "./components/TaskManager"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-iu-theme">
        <div className="container">
          <ModeToggle />
          <Toaster />
          <div className="navbar">
            <h1>Task Manager</h1>
          </div>
          <UserProvider>
            <TaskManager />
          </UserProvider>
        </div>
        
      </ThemeProvider>
    </>
  )
}

export default App
