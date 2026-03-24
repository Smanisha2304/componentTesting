import { ChatHistory } from "ai-ui-kit"
import { ChatInput } from "ai-ui-kit"
// import { ChatMessage } from "ai-ui-kit"
import { ChatShell } from "ai-ui-kit"

const ChatHistoryTest= () => {
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

export default ChatHistoryTest
