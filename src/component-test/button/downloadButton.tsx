import { DownloadTrigger } from "ai-ui-kit"

const DownloadTriggerTest = () => {
    return (
        <>
            <div>DownloadTriggerTest</div>

            <DownloadTrigger
                fileName="test.txt"
                mimeType="text/plain"
                data={() => "Hello world"}
                isLoading={false}
                onDownloadStart={() => { }}
                onDownloadEnd={() => { }}
            >
                {({ loading }) => <button>{loading ? "Loading" : "Download"}</button>}
            </DownloadTrigger>

        </>
    )
}

export default DownloadTriggerTest