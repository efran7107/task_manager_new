import toast from "react-hot-toast";
import { useLogIn } from "../../functions/ProvidersContexts";
import { validations } from "../../functions/validations";
import { UserTextInput } from "../input-components/UserInput";
import { defaultData } from "../../functions/default-data";
import { useState } from "react";
import { ErrorPopUp } from "../errorPopUps/errorPopUp";

export const SignUpForm = () => {
  const { signUp, setSignUp, checkSignUp } = useLogIn();
  const [isFirstLogIn, setIsFirstLogIn] = useState(true);
  const { firstName, lastName, username, email, newPassword, confirmPassword } =
    signUp;
  return (
    <form
      className="user-entry"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        if (!validations.isValidSignUpForm(signUp) ) {
          toast.error("please fill out the form to sign up");
          setIsFirstLogIn(false);
          return;
        }
        checkSignUp(signUp, setIsFirstLogIn)
        setSignUp(defaultData.defaultSignUp);
      }}
    >
      <h3>Sign Up</h3>
      <UserTextInput
        id="firstName"
        label="First Name"
        value={signUp.firstName}
        userInput={{
          type: "text",
          onChange: (e) => setSignUp({ ...signUp, firstName: e.target.value }),
        }}
      />
      {!isFirstLogIn &&
        (firstName.trim().length < 2 ||
          !validations.isNameValid(firstName)) && (
          <ErrorPopUp message="please enter a valid first name greater than 2 characters" />
        )}
      <UserTextInput
        id="lastName"
        label="Last Name"
        value={signUp.lastName}
        userInput={{
          type: "text",
          onChange: (e) => setSignUp({ ...signUp, lastName: e.target.value }),
        }}
      />
      {!isFirstLogIn &&
        (lastName.trim().length < 2 || !validations.isNameValid(lastName)) && (
          <ErrorPopUp message="please enter a valid last name greater than 2 characters" />
        )}
      <UserTextInput
        id="username"
        label="User Name"
        value={signUp.username}
        userInput={{
          type: "text",
          onChange: (e) => setSignUp({ ...signUp, username: e.target.value }),
        }}
      />
      {!isFirstLogIn && username.trim().length < 3 && (
        <ErrorPopUp message="please enter a username greater than 3 characters" />
      )}
      <UserTextInput
        id="email"
        label="Email"
        value={signUp.email}
        userInput={{
          type: "text",
          onChange: (e) => setSignUp({ ...signUp, email: e.target.value }),
        }}
      />
      {!isFirstLogIn &&
        (!validations.isValidEmail(email)) && (
          <ErrorPopUp message="please enter a valid email" />
        )}
      <UserTextInput
        id="newPassword"
        label="New Password"
        value={signUp.newPassword}
        userInput={{
          type: "password",
          onChange: (e) =>
            setSignUp({ ...signUp, newPassword: e.target.value }),
        }}
      />
      {!isFirstLogIn &&
        (newPassword !== confirmPassword) && (
          <ErrorPopUp message="passwords do not match" />
        )}
      <UserTextInput
        id="confirmPassword"
        label="Confirm Password"
        value={signUp.confirmPassword}
        userInput={{
          type: "password",
          onChange: (e) =>
            setSignUp({ ...signUp, confirmPassword: e.target.value }),
        }}
      />
      {!isFirstLogIn &&
        (newPassword !== confirmPassword) && (
          <ErrorPopUp message="passwords do not match" />
        )}
      <input className="active-btn" type="submit" value="Sign Up" />
    </form>
  );
};
