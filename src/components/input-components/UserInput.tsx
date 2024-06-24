import { UserInput } from "../../types/types";


export const UserTextInput = ({
    id,
    label,
    value,
    userInput
}: {
    id: string;
    label: string;
    value: string;
    userInput: UserInput
}) => {

    return (
        <div className="user-input-group">
            <label htmlFor={id}>{label}: </label>
            <input  
                name={id} 
                id={id} 
                value={value}   
                autoComplete="false"             
                {...userInput}
            />
        </div>
    )
}