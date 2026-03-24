import ConfigTable_Test from '../component-test/admin/ConfigTable'
import ModelEditorTest from '../component-test/admin/ModelEditor'
import PromptEditorTest from '../component-test/admin/PromptEditor'
// import ChatHistoryTest from '../component-test/chat/ChatHistoryTest'
// import ChatMessageTest from '../component-test/chat/ChatMessageTest'

const ms = () => {
  return (
    <div>
        <section>
            <p>ConfigTable</p>
            <ConfigTable_Test></ConfigTable_Test>
        </section><br></br>
        <p>ModelEditor</p>
        <section>
            <ModelEditorTest></ModelEditorTest>
        </section><br></br>
         <p>PromptEditor</p>
        <section>
            <PromptEditorTest></PromptEditorTest>
        </section><br></br>
         <p>ChatHistory_Input_Shell</p>
        <section>
          {/* <ChatHistoryTest></ChatHistoryTest> */}
        </section>
      
    </div>
  )
}

export default ms
