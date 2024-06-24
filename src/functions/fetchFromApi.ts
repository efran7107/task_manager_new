import { GetRequests } from "../apiCalls"
import { Users, UsersAuth } from "../types/types"


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

export const fetchFromApi = {
    fetchAllUsers,
    fetchUserPassword
}