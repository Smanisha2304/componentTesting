import { UploadProgress } from "ai-ui-kit";
const UploadProgressTest = () => {
    const progressProps = {
  progress: 60,
  label: "Uploading file...",
  showPercentage: true,
};

  return (
    <div>
      <UploadProgress {...progressProps} />
    </div>
  )
}

export default UploadProgressTest
