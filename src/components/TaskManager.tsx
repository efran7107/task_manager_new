import { useUser } from "../functions/ProvidersContexts"
import { LogInPage } from "./pages/LogInPage"
import '../css/LoadingPage.css'
import { LoadingPage } from "./loadingPage"

export const TaskManager = () => {

    const {pageStatus} = useUser()
    return (
        <>
            {pageStatus === 'loading' && <LoadingPage/>}
            {pageStatus === 'logged-out' && <LogInPage />}
        </>
    )
}