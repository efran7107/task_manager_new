import { useUser } from "../functions/ProvidersContexts"
import { LoadingPage } from "./LoadingPage"
import { LogInPage } from "./pages/LogInPage"
import '../css/LoadingPage.css'

export const TaskManager = () => {

    const {pageStatus} = useUser()
    return (
        <>
            {pageStatus === 'loading' && <LoadingPage/>}
            {pageStatus === 'logged-out' && <LogInPage />}
        </>
    )
}