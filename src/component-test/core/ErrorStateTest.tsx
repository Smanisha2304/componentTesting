import { ErrorState } from "ai-ui-kit"
import { FiAlertCircle } from "react-icons/fi"

const ErrorStateTest = () => {
    return (
        <>
            <div>ErrorStateTest</div>

            <ErrorState
                title="Request failed"
                description="Unable to fetch data"
                icon={FiAlertCircle}
                actionLabel="Retry"
                onAction={() => alert("retry")}
            />

        </>
    )
}

export default ErrorStateTest