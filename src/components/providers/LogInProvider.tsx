import { ReactNode, useState } from "react";
import { LogIn, SignUp } from "../../types/types";
import { defaultData } from "../../functions/default-data";
import { LogInContext, useUser } from "../../functions/ProvidersContexts";
import toast from "react-hot-toast";
import { fetchFromApi } from "../../functions/fetchFromApi";


export const LogInProvider = ({children}: {children: ReactNode}) => {
    const {allUsers, setUser, setPageStatus} = useUser()
    const [logIn, setLogIn] = useState<LogIn>(defaultData.defaultLogIn);
    const [signUp, setSignUp] = useState<SignUp>(defaultData.defaultSignUp)

    const checkLogIn = (userLogIn: LogIn, setIsFirstLogIn: (firstTime: boolean) => void) => {
        const userWithUsername = allUsers.filter(user => user.username === userLogIn.username)
        if(userWithUsername.length < 1){
            toast.error('Username and/or password is incorrect please try again');
            setIsFirstLogIn(false)
            setLogIn(defaultData.defaultLogIn)
            return
        }
        const user = userWithUsername[0];
        fetchFromApi
            .fetchUserPassword(user.id)
            .then((users) => {
                const userPassword = users[0].password
                if(users.length < 1 || userPassword !== logIn.password){
                    toast.error('User and/or password is incorrect please try again');
                    setIsFirstLogIn(false)
                    setLogIn(defaultData.defaultLogIn)
                    return;
                }
                setUser(user);
                setPageStatus('dashboard')
                toast.success('Log in successful')
                setIsFirstLogIn(true)
            })
            .catch(() => {
                toast.error('error loading data')
                setIsFirstLogIn(false)
                setLogIn(defaultData.defaultLogIn)
            })
        
    }

    return (
        <LogInContext.Provider 
            value={{
                logIn,
                setLogIn,
                checkLogIn,
                signUp,
                setSignUp
            }}
        >
            {children}
        </LogInContext.Provider>
    )
}