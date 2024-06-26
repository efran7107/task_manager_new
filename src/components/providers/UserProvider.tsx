import { ReactNode, useEffect, useState } from "react"
import { AllData, PageStatus, Users } from "../../types/types"
import { defaultData } from "../../functions/default-data"
import { UserContext } from "../../functions/ProvidersContexts"
import toast from "react-hot-toast"
import { fetchFromApi } from "../../functions/fetchFromApi"

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [allData, setAllData] = useState<AllData>(defaultData.defaultAllData)
    const [user, setUser] = useState<Users>(defaultData.defaultUser);
    const [pageStatus, setPageStatus] = useState<PageStatus>('loading');

    const {users} = allData

    const fetchAllData = (pageStatus: PageStatus) => {
        setPageStatus('loading')
        fetchFromApi
            .getAllData()
            .then(setAllData) 
            .then(() => setPageStatus(pageStatus))
            .catch(() => {
                toast.error('error loading data')
                setPageStatus('loading')
            })
    }

    const updateUsers = async () => {
        const users = await fetchFromApi.fetchAllUsers();
        setAllData({...allData, users: users})
    }

    useEffect(() => {
        setPageStatus('loading')
        if (localStorage.getItem('user') === null) {
            fetchAllData('logged-out')
            return;
        }
        const usersName = localStorage.getItem('user')!
            fetchFromApi.getUserFromName(usersName)
                .then((user) => {
                    const curntUser = user[0]
                    setUser(curntUser)
                })
            fetchAllData('dashboard')
            document.querySelectorAll(".navbar")[0].classList.add("dashboard");
        
    }, [])

    return (
        <UserContext.Provider 
            value={{
                user,
                setUser,
                pageStatus,
                setPageStatus,
                allData,
                users,
                updateUsers
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
