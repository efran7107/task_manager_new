import { useUser } from "../functions/ProvidersContexts"


export const UserDashBoard = () => {

    const {user, allData} = useUser()
    const {username, name, id, email} = user
    
    return (
        <>
            <div className="dashboard-navbar">
                <h3>{username}</h3>
            </div>
        </>
    )
}