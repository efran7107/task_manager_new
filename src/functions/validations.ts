import { LogIn, SignUp, Users } from "../types/types";

const isLogInBlank = (logIn: LogIn): boolean => {
    return logIn.username.trim().length === 0 || logIn.password.trim().length === 0
}

const isNameValid = (name: string): boolean => {
    return !/\d/.test(name)
}

const isValidEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
}

const isValidSignUpForm = (signUp:SignUp): boolean => {
    const {
        firstName,
        lastName,
        username,
        email,
        newPassword,
        confirmPassword
    } = signUp

    return (firstName.trim().length >= 2 && isNameValid(firstName)) && 
        (lastName.trim().length >= 2 && isNameValid(lastName)) &&
        username.trim().length >= 3 &&
        isValidEmail(email) &&
        newPassword.trim().length !== 0 &&
        confirmPassword.trim().length !== 0 &&
        newPassword === confirmPassword
    
    
}

const doesUserExist = (username:string, allUsers: Users[]): boolean => {
    return allUsers.filter(user => user.username === username).length === 0
}



export const validations = {
    isLogInBlank,
    isValidSignUpForm,
    isNameValid,
    isValidEmail,
    doesUserExist
}