import { useState } from "react";
import { UserTextInput } from "../input-components/UserInput";
import { LogIn } from "../../types/types";
import { defaultData } from "../../functions/default-data";
import { validations } from "../../functions/validations";
import toast from "react-hot-toast";

export const LogInForm = () => {
  const [logIn, setLogIn] = useState<LogIn>(defaultData.defaultLogIn);

  return (
    <form 
        className="user-entry"
        autoComplete="false"
        onSubmit={(e) => {
          e.preventDefault();
          if(validations.isLogInBlank(logIn)){
            toast.error('please enter a username and/or password')
            return
          }

          
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
      <input className="active-btn" type="submit" value="Log In" />
    </form>
  );
};
