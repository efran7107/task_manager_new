import { useUser } from "../functions/ProvidersContexts"
import { LogInPage } from "./pages/LogInPage"

export const TaskManager = () => {

    const {pageStatus} = useUser()
    return (
        <>
            {pageStatus === 'logged-out' && <LogInPage />}
        </>
    )
}