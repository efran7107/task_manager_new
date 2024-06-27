import { Team, Users, UsersTeamsLink } from "../types/types"


const getUsersTeams = (userId: number, userTeamLinks: UsersTeamsLink[], userTeams: Team[]): Team[] => {
    const userTeamLink = userTeamLinks.filter((link) => link.userId === userId);
    const userTeam:Team[] = []
    userTeamLink.forEach((link) => {
        const team = userTeams.filter((linkedTeam) => linkedTeam.id === link.teamId)[0]
        userTeam.push(team)
    })
    return userTeam
}

const getTeamUsers = (userTeams: Team[], usersTeamLinks: UsersTeamsLink[], users: Users[]): Array<Users[]> => {
    const teamUsers: Array<Users[]> = []
    userTeams.forEach((team) => {
        const userLinks = usersTeamLinks.filter((link) => link.teamId === team.id)
        const teamMembers: Users[] = []
        userLinks.forEach((link) => {
            const user = users.filter((user) => user.id === link.userId)[0]
            teamMembers.sort((curUser,nxtUser) =>{ 
                return curUser.id == team.teamLeaderId ? -1 : nxtUser.id == team.teamLeaderId ? 1 : 0; 
            });
            teamMembers.push(user)
        })

        teamUsers.push(teamMembers)
    })
    return teamUsers
}



export const functions = {
    getUsersTeams,
    getTeamUsers
}