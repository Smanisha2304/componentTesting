import { useState } from 'react';
import { ChatHistory } from "ai-ui-kit"
import { ChatInput } from "ai-ui-kit"
// import { ChatMessage } from "ai-ui-kit"
import { ChatShell } from "ai-ui-kit"

const ChatHistory_Input_Shell_Test= () => {

  type MessageType = {
    id: string;
    role: "user" | "assistant";
    content: string;
  };

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
  return (
    <div>
       <b><p>ChatShell , Chat History , Chat Input</p></b>
            <section>
              
              <ChatShell header="AI Chat">
        <ChatHistory messages={messages} />
        <ChatInput onSend={handleSendMessage} />
      </ChatShell>
            </section>
      
      <br></br>
    </div>
  )
}

export default ChatHistory_Input_Shell_Test
