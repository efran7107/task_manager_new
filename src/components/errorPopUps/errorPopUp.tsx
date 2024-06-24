export const ErrorPopUp = ({
    message
}: {
    message: string
}) => {
    return (
        <div className="error-popup">
            <p>{message}</p>
        </div>
    )
}