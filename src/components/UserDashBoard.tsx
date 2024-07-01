import { functions } from "../functions/functions"
import { useUser } from "../functions/ProvidersContexts"
import '../css/UserDashboard.css'
import { UsersTeams } from "./dashBoardComponents/usersTeams"
import { UserTaskBoard } from "./dashBoardComponents/userTaskBoard"


export const UserDashBoard = () => {

    const {user, allData} = useUser()
    const {username, id} = user

    const {usersTeamsLink, teams, users, taskAssignmentLinks, tasks, tags, taskTagsLinks, notes} = allData
    
    const userTeams = functions.getUsersTeams(id, usersTeamsLink, teams)
    const teamUsers = functions.getTeamUsers(userTeams, usersTeamsLink, users)
    const usersTasksAndTags = functions.getUsersTasks(id, taskAssignmentLinks, tasks, taskTagsLinks, tags, notes)

    

    return (
        <section className="dashboard">
            <div className="dashboard-navbar">
                <h3>{username}</h3>
                <a className="active-btn">+ Add Task</a>
            </div>
            <div className="user-info-area">
                <div className="teams-users">
                    <h5>Teams</h5>
                    <UsersTeams userTeams={userTeams} teamUsers={teamUsers}/>
                </div>
                <UserTaskBoard userTask={usersTasksAndTags}/>
            </div>
            
        </section>
            
    )
}