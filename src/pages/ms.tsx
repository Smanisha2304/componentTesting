import ConfigTable_Test from '../component-test/admin/ConfigTable'
import ModelEditorTest from '../component-test/admin/ModelEditor'
import PromptEditorTest from '../component-test/admin/PromptEditor'
import ChatHistory_Input_Shell_Test from '../component-test/chat/ChatHistory_Input_Shell_Test'
import ChatMeessageTest from '../component-test/chat/ChatMeessageTest'
import FeedbackWidgetTest from '../component-test/observability/FeedbackWidgetTest'
import LogsTableTest from '../component-test/observability/LogsTableTest'
import UsageCardTest from '../component-test/observability/UsageCardTest'


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
          <ChatHistory_Input_Shell_Test/>
        </section>

         <p>ChatMesaage</p>
        <section>
          <ChatMeessageTest/>
        </section>
        <p>FEEDBACKWIDGED</p>
         <section>
          <FeedbackWidgetTest/>
        </section>

        <p>LogsTable</p>
         <section>
          <LogsTableTest/>
        </section>
      
       <p>UsageCard</p>
         <section>
          <UsageCardTest/>
        </section>
    </div>
  )
}

export default ms
