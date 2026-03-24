import { Dropzone } from "ai-ui-kit";
import type { DropzoneProps } from "ai-ui-kit";

const DropzoneTest = () => {

//   const dropzoneProps: DropzoneProps = {
//   onFilesSelected: (files) => {
//     console.log("Files:", files);
//   },
//   accept: {
//     "image/*": [".png", ".jpg", ".jpeg"],
//   },
//   multiple: true,
//   maxSize: 5 * 1024 * 1024,
// };
const createDropzoneProps = (): DropzoneProps => ({
  onFilesSelected: (files) => console.log(files),
  multiple: false,
});
  return (
    <div>
  <Dropzone {...createDropzoneProps()} />;
    </div>
  )
}

export default DropzoneTest;
