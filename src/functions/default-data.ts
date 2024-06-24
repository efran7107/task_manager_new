import { LogIn, User } from "../types/types"

const defaultUser: User = {
    id: 0,
    username: "example",
    email: "example@example.com",
    name:'example'
}

const defaultLogIn:LogIn = {
    username: "",
    password: ""
}

export const defaultData = {
    defaultUser,
    defaultLogIn
}