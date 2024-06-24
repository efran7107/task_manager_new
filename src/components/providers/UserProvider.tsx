import { ReactNode, useEffect, useState } from "react"
import { PageStatus, User } from "../../types/types"
import { defaultData } from "../../functions/default-data"
import { UserContext } from "../../functions/ProvidersContexts"

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User>(defaultData.defaultUser)
    const [pageStatus, setPageStatus] = useState<PageStatus>('loading')

    useEffect(() => {
        setPageStatus('logged-out')
    }, [])

    return (
        <UserContext.Provider 
            value={{
                user,
                setUser,
                pageStatus,
                setPageStatus
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
