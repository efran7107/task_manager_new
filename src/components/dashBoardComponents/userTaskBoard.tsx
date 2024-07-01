import { useUser } from "../../functions/ProvidersContexts"
import { Tasks, UserTasks } from "../../types/types"
import '../../css/UserDashboard.css'
import { useState } from "react"
import { TaskModal } from "./taskModal"
import { defaultData } from "../../functions/default-data"

export const UserTaskBoard = ({
    userTask
}:
{
    userTask: UserTasks[]
}) => {
    
    const toDo = userTask.filter((task) => task.task.status === 'to-do')
    const doing = userTask.filter((task) => task.task.status === 'doing')
    const done = userTask.filter((task) => task.task.status === 'done')

    const [isViewingTask, setIsViewingTask] = useState(false)
    const [vewingTask, setViewingTask] = useState<Tasks>(defaultData.defaultTask)

    return (
        <div className="user-task-board">
            {isViewingTask && <TaskModal task={vewingTask}/>}
            <div className="task-section">
                {toDo.map((task) => (
                    <Task 
                        tasks={task.task} 
                        key={task.task.id}
                        setIsViewingTask={setIsViewingTask}
                        setViewingTask={setViewingTask}
                    />
                ))}
            </div>
            <div className="task-section">
                {doing.map((task) => (
                    <Task 
                        tasks={task.task} 
                        key={task.task.id}
                        setIsViewingTask={setIsViewingTask}
                        setViewingTask={setViewingTask}
                    />
                ))}
            </div>
            <div className="task-section">
                {done.map((task) => (
                    <Task 
                        tasks={task.task} 
                        key={task.task.id}
                        setIsViewingTask={setIsViewingTask}
                        setViewingTask={setViewingTask}
                    />
                    ))}
            </div>
        </div>
    )
}

const Task = ({
    tasks, 
    setIsViewingTask,
    setViewingTask
}:{
    tasks: Tasks, 
    setIsViewingTask: (value: boolean) => void,
    setViewingTask: (task: Tasks) => void
}) => {
    const {allData} = useUser()
    const {users} = allData
    const { taskName, dueDate, status, isImportant, userCreaterId} = tasks
    const userCreatedTask = users.find(user => user.id === userCreaterId)!
    return (
        <div 
            className="task" 
            onClick={() => {
                setIsViewingTask(true)
                setViewingTask(tasks)
            }}
        >
            <p>{taskName}</p>
            <p>{status}</p>
            <p>{isImportant ? <i className="fa-solid fa-exclamation"></i> : ''}</p>
            <p>Due: {dueDate}</p>
            <p>Created by: {userCreatedTask.name}</p>
        </div>
    )
}