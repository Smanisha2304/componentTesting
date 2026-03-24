import { ChatMessage } from "ai-ui-kit"

const ChatMeessageTest = () => {

  type MessageType = {
    id: string;
    role: "user" | "assistant";
    content: string;
  };
      const msg: MessageType = {
    id: "1",
    role: "user",
    content: "Manisha Sharma"
  };
  return (
    <div>
       <section>
              <ChatMessage {...msg} />
            </section> 
    </div>
  )
}

export default ChatMeessageTest
