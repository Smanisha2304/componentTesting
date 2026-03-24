import ConfigTable_Test from '../component-test/admin/ConfigTable'
import ModelEditorTest from '../component-test/admin/ModelEditor'
import PromptEditorTest from '../component-test/admin/PromptEditor'
import ChatHistory_Input_Shell_Test from '../component-test/chat/ChatHistory_Input_Shell_Test'
import ChatMeessageTest from '../component-test/chat/ChatMeessageTest'
import FeedbackWidgetTest from '../component-test/observability/FeedbackWidgetTest'
import LogsTableTest from '../component-test/observability/LogsTableTest'
import UsageCardTest from '../component-test/observability/UsageCardTest'
import DropzoneTest from '../component-test/upload/DropzoneTest'
import FileQueueTest from '../component-test/upload/FileQueueTest'
import UploadProgressTest from '../component-test/upload/UploadProgressTest'


const ms = () => {
  return (
    <div>
        <section>
            {/* <p>ConfigTable</p> */}
            <ConfigTable_Test></ConfigTable_Test>
        </section><br></br>
        {/* <p>ModelEditor</p> */}
        <section>
            <ModelEditorTest></ModelEditorTest>
        </section><br></br>
         {/* <p>PromptEditor</p> */}
        <section>
            <PromptEditorTest></PromptEditorTest>
        </section><br></br>
         {/* <p>ChatHistory_Input_Shell</p> */}
        <section>
          <ChatHistory_Input_Shell_Test/>
        </section><br></br>

         {/* <p>ChatMesaage</p> */}
        <section>
          <ChatMeessageTest/>
        </section><br></br>
        {/* <p>FEEDBACKWIDGED</p> */}
         <section>
          <FeedbackWidgetTest/>
        </section><br></br>

        {/* <p>LogsTable</p> */}
         <section>
          <LogsTableTest/>
        </section><br></br>
      
       {/* <p>UsageCard</p> */}
         <section>
          <UsageCardTest/>
        </section><br></br>

        <p>Dropzone</p>
         <section>
          <DropzoneTest/>
        </section><br></br>

        <p>FileQueue</p>
         <section>
          <FileQueueTest/>
        </section><br></br>


        <p>UploadProgress</p>
         <section>
          <UploadProgressTest/>
        </section>
    </div>
  )
}

export default ms
