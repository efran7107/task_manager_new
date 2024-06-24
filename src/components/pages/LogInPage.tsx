import { LogInForm } from "../forms/LogInForm";
import "../../css/LogInSection.css";
import "../../index.css";
import { LogInProvider } from "../providers/LogInProvider";

export const LogInPage = () => {
  return (
    <div className="log-in-section">
      <LogInProvider>
        <LogInForm />
      </LogInProvider>
    </div>
  );
};
