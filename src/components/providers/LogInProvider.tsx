import { ReactNode, useState } from "react";
import { LogIn } from "../../types/types";
import { defaultData } from "../../functions/default-data";
import { LogInContext, useUser } from "../../functions/ProvidersContexts";
import toast from "react-hot-toast";
import { fetchFromApi } from "../../functions/fetchFromApi";


export const LogInProvider = ({children}: {children: ReactNode}) => {
    const {allUsers, setUser, setPageStatus} = useUser()
    const [logIn, setLogIn] = useState<LogIn>(defaultData.defaultLogIn);

    const checkLogIn = (userLogIn: LogIn) => {
        const userWithUsername = allUsers.filter(user => user.username === userLogIn.username)
        if(userWithUsername.length < 1){
            toast.error('User and/or password is incorrect please try again');
            return
        }
        const user = userWithUsername[0];
        fetchFromApi
            .fetchUserPassword(user.id)
            .then((users) => {
                const userPassword = users[0].password
                if(users.length < 1 || userPassword !== logIn.password){
                    toast.error('User and/or password is incorrect please try again');
                    return;
                }
                setUser(user);
                setPageStatus('dashboard')
                toast.success('Log in successful')
            })
            .catch(() => toast.error('error loading data'))
        
    }

    return (
        <LogInContext.Provider 
            value={{
                logIn,
                setLogIn,
                checkLogIn
            }}
        >
            {children}
        </LogInContext.Provider>
    )
}