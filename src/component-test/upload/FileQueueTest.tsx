import { FileQueue } from "ai-ui-kit";
import type { FileQueueItem } from "ai-ui-kit";

const FileQueueTest = () => {
  
  const files: FileQueueItem[] = [
    {
      id: "1",
      name: "file1.png",
      status: "pending",
    },
    {
      id: "2",
      name: "file2.pdf",
      status: "uploading",
      progress: 50,
    },
  ];

  const fileQueueProps = {
    files,
    onRemove: (id: string) => {
      console.log("Remove:", id);
    },
  };

  return (
    <div>
      <p>FileQueue</p>
      <FileQueue {...fileQueueProps} />
    </div>
  );
};

export default FileQueueTest;