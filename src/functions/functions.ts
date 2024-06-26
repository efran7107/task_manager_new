import { UsersTeamsLink } from "../types/types"


const getUsersTeamLinks = (userId: number, userTeamLinks: UsersTeamsLink[]): UsersTeamsLink[] => {
    return userTeamLinks.filter((link) => link.userId === userId);

}

export const functions = {
    getUsersTeamLinks
}