
import toast from "react-hot-toast"
import { GetRequests, PostRequests } from "../apiCalls"
import { AllData, SignUp, Users, UsersAuth } from "../types/types"
import { formatting } from "./format"
import { defaultData } from "./default-data"


const fetchAllUsers = async ():Promise<Users[]> => {
    return (await GetRequests.getAllUsers())
}

const fetchUserPassword = async (userId: number):Promise<UsersAuth[]> => {
    return await GetRequests
        .getUserAuth(userId)
        .then((res) => {
            if(res.length === 0){
                return []
            }
            return res
        })
}

const createUser = async (signUp: SignUp):Promise<Users> => {
    const {
        firstName,
        lastName,
        username,
        email,
        newPassword,
    } = signUp
    const newUser:Omit<Users,'id'> = {
        name: formatting.formatName(firstName, lastName),
        username: username,
        email: email,
    }

    const user = await PostRequests.createNewUser(newUser)
    
    const newUsersAuth: Omit<UsersAuth, 'id'> = {
        userId: user.id,
        password: newPassword
    }

    await PostRequests
        .createUsersAuth(newUsersAuth)
        .catch(() => {
            toast.error('error loading data')
            return defaultData.defaultUser
        })
    return user
}

const getUserFromName = async (name: string):Promise<Users[]> => {
    return await GetRequests.getUserByName(name)
}

const getAllData = async ():Promise<AllData> => {
    return {
        teams: await GetRequests.getAllTeams(),
        users: await GetRequests.getAllUsers(),
        usersTeamsLink: await GetRequests.getAllUserTeamLinks(),
        tasks: await GetRequests.getAllTasks(),
        taskAssignmentLinks: await GetRequests.getAllAssignmentLink(),
        tags: await GetRequests.getAllTags(),
        taskTagsLinks: await GetRequests.getAllTaskTagLinks(),
        notes: await GetRequests.getAllNotes()
    }
}

export const fetchFromApi = {
    fetchAllUsers,
    fetchUserPassword,
    createUser,
    getUserFromName,
    getAllData
}