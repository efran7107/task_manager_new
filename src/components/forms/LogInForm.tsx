import { UserTextInput } from "../input-components/UserInput";
import { validations } from "../../functions/validations";
import toast from "react-hot-toast";
import { useLogIn } from "../../functions/ProvidersContexts";
import { defaultData } from "../../functions/default-data";
import { useState } from "react";
import { ErrorPopUp } from "../errorPopUps/errorPopUp";

export const LogInForm = () => {
  const {logIn, setLogIn, checkLogIn} = useLogIn()
  const [isFirstLogIn, setIsFirstLogIn] = useState(true)

  return (
    <form 
        className="user-entry"
        autoComplete="false"
        onSubmit={(e) => {
          e.preventDefault();
          if(validations.isLogInBlank(logIn)){
            toast.error('please enter a username and/or password')
            setIsFirstLogIn(false)
            return
          }
          checkLogIn(logIn, setIsFirstLogIn)
          setLogIn(defaultData.defaultLogIn)

        }}
    >
      <h3>Log In</h3>
      <UserTextInput
        id="name"
        label="Username"
        value={logIn.username}
        userInput={{
          type: "text",
          onChange: (e) => {
            setLogIn({
              ...logIn,
              username: e.currentTarget.value,
            });
          },
        }}
      />
      {
        !isFirstLogIn && 
          <ErrorPopUp
            message="wrong username"
            />
      }
      <UserTextInput
        id="password"
        label="Password"
        value={logIn.password}
        userInput={{
          type: "password",
          onChange: (e) => {
            setLogIn({
              ...logIn,
              password: e.currentTarget.value,
            });
          },
        }}
      />
      {
        !isFirstLogIn && 
          <ErrorPopUp
            message="wrong password"
            />
      }
      <input className="active-btn" type="submit" value="Log In" />
    </form>
  );
};
