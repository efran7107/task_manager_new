import { ReactNode, useEffect, useState } from "react"
import { PageStatus, Users } from "../../types/types"
import { defaultData } from "../../functions/default-data"
import { UserContext } from "../../functions/ProvidersContexts"
import { GetRequests } from "../../apiCalls"
import toast from "react-hot-toast"
import { fetchFromApi } from "../../functions/fetchFromApi"

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<Users>(defaultData.defaultUser);
    const [pageStatus, setPageStatus] = useState<PageStatus>('loading');
    const [allUsers, setAllUsers] = useState<Users[]>([])

    const fetchAllUsers = () => {
        
        setPageStatus('loading')
        GetRequests.getAllUsers().then((users) => {
            setAllUsers(users);
            setPageStatus('logged-out')
        })
        .catch(() => {
            toast.error('error loading data')
        })
    }

    useEffect(() => {
        if (localStorage.getItem('user') !== null && localStorage.getItem('user')!.length > 0) {
            const usersName = localStorage.getItem('user')!
            fetchFromApi.getUserFromName(usersName)
                .then((user) => {
                    const curntUser = user[0]
                    setUser(curntUser)
                })
            
            setPageStatus('dashboard')
            document.querySelectorAll(".navbar")[0].classList.add("dashboard");
            return;
        }
        fetchAllUsers();
    }, [])

    return (
        <UserContext.Provider 
            value={{
                user,
                setUser,
                pageStatus,
                setPageStatus,
                allUsers
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
