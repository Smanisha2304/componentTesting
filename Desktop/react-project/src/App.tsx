import { useState } from 'react';
import './App.css'
import { ChatActions, ChatHistory, ChatInput, ChatMessage, ConfigTable, ModelEditor, PromptEditor } from 'ai-ui-kit'

function App() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "model", label: "Model" },
    { key: "temperature", label: "Temperature" },
  ]

  const data = [
    { name: "Chat Bot", model: "gpt-4", temperature: 0.7 },
    { name: "Code AI", model: "gpt-4.1", temperature: 0.2 },
  ]
  type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

  const handleEdit = (row: any) => console.log("Edit:", row)
  const handleDelete = (row: any) => console.log("Delete:", row)

  const handleSaveModel = (config: any) => console.log("Saved model config:", config)
  const handleCancelModel = () => console.log("Cancelled model editor")

  const handleSavePrompt = (config: any) => console.log("Saved prompt:", config)
  const handleCancelPrompt = () => console.log("Cancelled prompt editor")
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", role: "assistant", content: "Welcome! Start typing below..." },
  ]);

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: (prev.length + 1).toString(), role, content },
    ]);
  };

  const handleSendMessage = (message: string) => {
    addMessage("user", message);

    setTimeout(() => {
      addMessage("assistant", `You said: "${message}"`);
    }, 500);
  };

  return (
    <>
     <br></br>
      <b><p>ConfigTable</p></b>
      <br></br>
      <section>
        <ConfigTable
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>
      <br></br>
      <b><p>ModelEditor</p></b>
      <section style={{ marginTop: "30px" }}>
        <ModelEditor
          onSave={handleSaveModel}
          onCancel={handleCancelModel}
        />
      </section>
      <br></br>
      <b><p>PromptEditor</p></b>
      <section style={{ marginTop: "30px" }}>
        <PromptEditor
          onSave={handleSavePrompt}
          onCancel={handleCancelPrompt}
          initialValue={{
            title: "Example Prompt",
            description: "This is a sample description",
            prompt: "Write a short poem about AI."
          }}
        />
      </section>
      <br></br>
      <b><p>ChatActions</p></b>
      <section>
           <ChatActions
  onCopy={() => console.log("Copy clicked")}
  onRegenerate={() => console.log("Regenerate clicked")}
  onLike={() => console.log("Liked")}
  onDislike={() => console.log("Disliked")}
  size="md" // optional: "sm", "md", or "lg"
/>
      </section>
       <br></br>
       <p>Chat History</p>
       <section>
      <ChatHistory messages={messages} />
    </section><br></br>
    <p>Chat Input</p>
    <section>
      <ChatInput onSend={handleSendMessage} />
    </section>

    <p>Chat Message</p>
    <section>
      
    </section>
       
    </>
  )
}

export default App

