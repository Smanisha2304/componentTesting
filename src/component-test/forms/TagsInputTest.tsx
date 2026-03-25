import { useState } from "react";
import { Field, TagsInput } from "ai-ui-kit";

const TagsInputTest = () => {
  const [tags, setTags] = useState<string[]>(["react"]);
  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <p>TagsInput</p>
      <Field label="Tags" helperText="Type and press Enter to add tags">
        <TagsInput
          value={tags}
          onValueChange={(details) => setTags(details.value)}
          placeholder="Add tag..."
        />
        <p>Selected tags: {tags.length ? tags.join(", ") : "none"}</p>
        
      </Field>
    </div>
  );
};

export default TagsInputTest;
