import { useState } from 'react';
import './App.css'
import { ChatActions, ChatHistory, ChatInput, ChatShell, ChatMessage, ConfigTable, ModelEditor, PromptEditor, FeedbackWidget, LogsTable, UsageCard, AnswerPanel } from 'ai-ui-kit'
// import { DatePicker } from '@chakra-ui/react';
import type { LogItem} from 'ai-ui-kit';
// import { BlockquoteCaption, BlockquoteContent, BlockquoteRoot } from '@chakra-ui/react';
// import { DatePicker } from 'ai-ui-kit';


function App() 
{
  const columns = [
    { key: "name", label: "Name" },
    { key: "model", label: "Model" },
    { key: "temperature", label: "Temperature" },
  ]

  const data = [
    { name: "Chat Bot", model: "gpt-4", temperature: 0.7 },
    { name: "Code AI", model: "gpt-4.1", temperature: 0.2 },
  ]
  type MessageType = {
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

  const [messages, setMessages] = useState<MessageType[]>([
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

  const msg: MessageType = {
    id: "1",
    role: "user",
    content: "Manisha Sharma"
  };

  const logs: LogItem[] = [
  {
    id: "1",
    message: "API failure",
    status: "error",
    latency: 100,
    timestamp: "10:00 AM"
  }
];
const usageData = {
  label: "Total Users",
  value: 1250,
  description: "Active users this month",
};
  return (
    <>
      <br />
      <b><p>ConfigTable</p></b>
      <br />

      <section>
        <ConfigTable
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>

      <br />
      <b><p>ModelEditor</p></b>

      <section style={{ marginTop: "30px" }}>
        <ModelEditor
          onSave={handleSaveModel}
          onCancel={handleCancelModel}
        />
      </section>

      <br />
      <b><p>PromptEditor</p></b>

      <section style={{ marginTop: "30px" }}>
        <PromptEditor
          onSave={handleSavePrompt}
          onCancel={handleCancelPrompt}
          initialValue={{
            title: "Example Prompt",
            description: "This is a sample description",
            prompt: "Write a short."
          }}
        />
      </section>

      <br />
      <b><p>ChatActions</p></b>

      <section>
        <ChatActions
          onCopy={() => console.log("Copy clicked")}
          onRegenerate={() => console.log("Regenerate clicked")}
          onLike={() => console.log("Liked")}
          onDislike={() => console.log("Disliked")}
          size="md"
        />
      </section>

      <br />
      {/* <p>Chat History</p>

      <section>
        <ChatHistory messages={messages} />
      </section>

      <br />
      <p>Chat Input</p>

      <section>
        <ChatInput onSend={handleSendMessage} />
      </section> */}

      <br />
      <b><p>Chat Message</p></b>

      <section>
        <ChatMessage {...msg} />
      </section> 

      <br />
      <b><p>ChatShell , Chat History , Chat Input</p></b>
      <section>
        
        <ChatShell header="AI Chat">
  <ChatHistory messages={messages} />
  <ChatInput onSend={handleSendMessage} />
</ChatShell>
      </section>

<br></br>

<b><p>FEEDBACK WIDGET</p></b>

      <section>
        <FeedbackWidget></FeedbackWidget>
      </section>

      <br></br>

<b><p>logsTable</p></b>

      <section>
        <LogsTable logs={logs}>

        </LogsTable>
      </section>
      <br></br>
      <b><p>User Card </p></b>
      <section>
        {/* <UsageCard></UsageCard> */}
       <UsageCard {...usageData} />
      </section>

      {/* <b><p>Block Quote caption </p></b>
      <section>
       <BlockquoteCaption></BlockquoteCaption>
      </section>
       <b><p>Block Quote content</p></b>
      <section>
       <BlockquoteContent></BlockquoteContent>
      </section>

      <b><p>Block Quote Root</p></b>
      <section>
       <BlockquoteRoot></BlockquoteRoot>
      </section> */}
      <b><p>Answer Panel  </p></b>
      <section>
        <AnswerPanel></AnswerPanel>
      </section>


    </>
    
  )
}

export default App