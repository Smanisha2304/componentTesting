import { ChatMessage } from "ai-ui-kit"

const ChatMeessageTest = () => {

     const msg = {
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
