import { functions } from "../functions/functions"
import { useUser } from "../functions/ProvidersContexts"
import '../css/UserDashboard.css'
import { UsersTeams } from "./dashBoardComponents/usersTeams"


export const UserDashBoard = () => {

    const {user, allData} = useUser()
    const {username, id} = user

    const {usersTeamsLink, teams, users} = allData
    
    const userTeams = functions.getUsersTeams(id, usersTeamsLink, teams)
    const teamUsers = functions.getTeamUsers(userTeams, usersTeamsLink, users)
    

    

    return (
        <section className="dashboard">
            <div className="dashboard-navbar">
                <h3>{username}</h3>
                <a className="active-btn">+ Add Task</a>
            </div>
            <div className="teams-users">
                <h5>Teams</h5>
                <UsersTeams userTeams={userTeams} teamUsers={teamUsers}/>
            </div>
        </section>
            
    )
}