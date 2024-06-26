import { useUser } from "../functions/ProvidersContexts"
import { LogInPage } from "./pages/LogInPage"
import '../css/LoadingPage.css'
import { LoadingPage } from "./loadingPage"
import { UserDashBoard } from "./UserDashBoard"

export const TaskManager = () => {

    const {pageStatus} = useUser()
    return (
        <>
            {pageStatus === 'loading' && <LoadingPage/>}
            {pageStatus === 'logged-out' && <LogInPage />}
            {pageStatus === 'dashboard' && <UserDashBoard />}
        </>
    )
}