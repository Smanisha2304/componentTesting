// import React from "react";
import { Field } from "ai-ui-kit";
import { FileUpload } from "ai-ui-kit";

const FileUploadTest = () => {
  return (
    <Field
      label="Upload Resume"
      helperText="PDF only, max 5MB"
    >
      <FileUpload
        accept=".pdf"
        showSize
        clearable
      />
    </Field>
  );
};

export default FileUploadTest;