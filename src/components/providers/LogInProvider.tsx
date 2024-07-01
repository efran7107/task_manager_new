import { ReactNode, useState } from "react";
import { LogIn, SignUp, Users } from "../../types/types";
import { defaultData } from "../../functions/default-data";
import { LogInContext, useUser } from "../../functions/ProvidersContexts";
import toast from "react-hot-toast";
import { fetchFromApi } from "../../functions/fetchFromApi";
import { validations } from "../../functions/validations";
import { formatting } from "../../functions/format";

export const LogInProvider = ({ children }: { children: ReactNode }) => {
  const { users, setUser, setPageStatus, updateUsers } = useUser();
  const [logIn, setLogIn] = useState<LogIn>(defaultData.defaultLogIn);
  const [signUp, setSignUp] = useState<SignUp>(defaultData.defaultSignUp);
  const [allUsers, setAllUsers] = useState<Users[]>(users)

  const checkLogIn = (
    userLogIn: LogIn,
    setIsFirstLogIn: (firstTime: boolean) => void
  ) => {
    const userWithUsername = allUsers.filter(
      (user) => user.username === userLogIn.username
    );
    if (userWithUsername.length < 1) {
      toast.error("Username and/or password is incorrect please try again");
      setIsFirstLogIn(false);
      setLogIn(defaultData.defaultLogIn);
      return;
    }
    const user = userWithUsername[0];
    fetchFromApi
      .fetchUserPassword(user.id)
      .then((users) => {
        const userPassword = users[0].password;
        if (users.length < 1 || userPassword !== logIn.password) {
          toast.error("User and/or password is incorrect please try again");
          setIsFirstLogIn(false);
          setLogIn(defaultData.defaultLogIn);
          return;
        }
        setUser(user);
        setPageStatus("dashboard");
        toast.success("Log in successful");
        localStorage.setItem('user', user.name)
        setIsFirstLogIn(true);
        document.querySelectorAll(".navbar")[0].classList.add("dashboard");
      })
      .catch(() => {
        toast.error("error loading data");
        setIsFirstLogIn(false);
        setLogIn(defaultData.defaultLogIn);
      });
  };

  const checkSignUp = (
    signUpForm: SignUp,
    setIsFirstLogIn: (firstTime: boolean) => void
  ) => {
    if (!validations.doesUserExist(signUpForm.username, allUsers)) {
      toast.error("username already exists");
      setIsFirstLogIn(false);
      return
    }
    setAllUsers([
      ...allUsers,
      {
        id: allUsers[allUsers.length - 1].id + 1,
        name: formatting.formatName(signUp.firstName, signUp.lastName),
        username: signUp.username,
        email: signUp.email
      }
    ])
    fetchFromApi
      .createUser(signUp)
      .then((user) => {
        setUser(user);
        setIsFirstLogIn(true);
        setPageStatus("dashboard");
        localStorage.setItem('user', user.name)
        document.querySelectorAll(".navbar")[0].classList.add("dashboard");
        toast.success("Log in successful");
        updateUsers()
      })
      .catch(() => {
        toast.error("something went wrong, please try again");
        setAllUsers(allUsers)
      });
  };

  return (
    <LogInContext.Provider
      value={{
        logIn,
        setLogIn,
        checkLogIn,
        signUp,
        setSignUp,
        checkSignUp,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};
