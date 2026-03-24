import { ChatActions } from "ai-ui-kit"

const ChatActionTest= () => {
  return (
    <div>
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
    </div>
  )
}

export default ChatActionTest
