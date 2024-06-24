import { LogIn } from "../types/types";

const isLogInBlank = (logIn: LogIn) => {
    return logIn.username.trim().length === 0 || logIn.password.trim().length === 0
}

export const validations = {
    isLogInBlank
}