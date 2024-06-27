import { Team, Users } from "../../types/types";

export const UsersTeams = ({
    userTeams,
    teamUsers
}: {
    userTeams: Team[];
    teamUsers: Array<Users>[];
}) => {

    return(
        <>
            {userTeams.map((team) => (
                <>
                    <p key={team.id}>{team.teamName}</p>
                    <ul>
                        {teamUsers[userTeams.indexOf(team)].map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </>
            ))}
        </>
        
    )
}