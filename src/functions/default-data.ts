import { AllData, LogIn, SignUp, Users } from "../types/types"

const defaultUser: Users = {
    id: 0,
    username: "example",
    email: "example@example.com",
    name:'example'
}

const defaultLogIn:LogIn = {
    username: "",
    password: ""
}

const defaultSignUp: SignUp = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    newPassword: '',
    confirmPassword: ''
}

const defaultAllData: AllData = {
    teams: [],
    users: [],
    usersTeamsLink: [],
    tasks: [],
    taskAssignmentLinks: [],
    tags: [],
    taskTagsLinks: [],
    notes: []
}

export const defaultData = {
    defaultUser,
    defaultLogIn,
    defaultSignUp,
    defaultAllData
}

