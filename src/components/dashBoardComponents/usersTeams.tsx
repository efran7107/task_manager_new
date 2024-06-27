import { Team, Users } from "../../types/types";
import '../../css/UserDashboard.css'

export const UsersTeams = ({
    userTeams,
    teamUsers
}: {
    userTeams: Team[];
    teamUsers: Array<Users>[];
}) => {

    return(
        <div className="teams-container">
            {userTeams.map((team) => (
                <div key={team.id} className="team-container">
                    <p>{team.teamName}</p>
                    <ul>
                        {teamUsers[userTeams.indexOf(team)].map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        
    )
}