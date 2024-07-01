import { Notes, Tags, TaskAssignmentLink, Tasks, TaskTagLink, Team, Users, UsersTeamsLink, UserTasks } from "../types/types"


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

const getUsersTasks = (userId: number, taskAssignments: TaskAssignmentLink[], tasks: Tasks[], taskTagLink: TaskTagLink[],tags: Tags[], notes: Notes[] ): UserTasks[] => {
    const userTaskAssignments = taskAssignments.filter(assignment => assignment.userId === userId)
    const userTasks: Tasks[] = [];
    userTaskAssignments.forEach((assignment) => {
        const task = tasks.find((task) => task.id === assignment.taskId)!
        userTasks.push(task)
    })
    const taskAndTags: UserTasks[] = []

    userTasks.forEach((task) => {
        const taskTag = taskTagLink.filter((tag) => tag.taskId === task.id)
        const taskTags: Tags[] = []
        taskTag.forEach((link) => {
            const linkedTag = tags.find((tag) => tag.id === link.tagId)!
            taskTags.push(linkedTag)
        })
        const taskNotes = notes.filter((note) => note.taskId === task.id)
        taskAndTags.push({task: task, tags: taskTags, notes: taskNotes})
    })
    return taskAndTags
}


export const functions = {
    getUsersTeams,
    getTeamUsers,
    getUsersTasks
}