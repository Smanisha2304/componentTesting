import ChatHistory_Input_Shell_Test from '../component-test/chat/ChatHistory_Input_Shell_Test'
import ChatMeessageTest from '../component-test/chat/ChatMeessageTest'
import CheckboxTest from '../component-test/forms/CheckboxTest'
import FieldsetTest from '../component-test/forms/FieldsetTest'
import FieldTest from '../component-test/forms/FieldTest'
import FeedbackWidgetTest from '../component-test/observability/FeedbackWidgetTest'
import LogsTableTest from '../component-test/observability/LogsTableTest'
import UsageCardTest from '../component-test/observability/UsageCardTest'
import DropzoneTest from '../component-test/upload/DropzoneTest'
import FileQueueTest from '../component-test/upload/FileQueueTest'
import UploadProgressTest from '../component-test/upload/UploadProgressTest'
import FileUploadTest from '../component-test/forms/FileUploadTest'
import InputTest from '../component-test/forms/InputTest'
import NumberInputTest from '../component-test/forms/NumberInputTest'
import PasswordInputTest from '../component-test/forms/PasswordInputTest'
import RadioTest from '../component-test/forms/RadioTest'
import SliderTest from '../component-test/forms/SliderTest'
import SwitchTest from '../component-test/forms/SwitchTest'
import TagsInputTest from '../component-test/forms/TagsInputTest'


const ms = () => {
  return (
    <div>
      <section>
        {/* <p>ConfigTable</p> */}
        <ConfigTableTest></ConfigTableTest>
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
        <ChatHistory_Input_Shell_Test />
      </section><br></br>

      {/* <p>ChatMesaage</p> */}
      <section>
        <ChatMeessageTest />
      </section><br></br>
      {/* <p>FEEDBACKWIDGED</p> */}
      <section>
        <FeedbackWidgetTest />
      </section><br></br>

      {/* <p>LogsTable</p> */}
      <section>
        <LogsTableTest />
      </section><br></br>

      {/* <p>UsageCard</p> */}
      <section>
        <UsageCardTest />
      </section><br></br>

      <p>Dropzone</p>
      <section>
        <DropzoneTest />
      </section><br></br>

      <p>FileQueue</p>
      <section>
        <FileQueueTest />
      </section><br></br>


      <p>UploadProgress</p>
      <section>
        <UploadProgressTest />
      </section>

      <p>CheckerBox</p>
      <section>
        <CheckboxTest />
      </section>
      <p>Field</p>
      <section>
        <FieldTest />
      </section>

      <p>FieldSet</p>
      <section>
        <FieldsetTest />
      </section>

      <p>FormUpload</p>
      <section>
        <FileUploadTest />
      </section>

      <p>Input</p>
      <section>
        <InputTest />
      </section>
      <br></br>
      <p>password</p>
      <section>
        <PasswordInputTest />
      </section>
      <p>Number</p>
      <section>
        <NumberInputTest />
      </section>
      <p>radio</p>
      <section>
        <RadioTest />
      </section>
      <p>slider</p>
      <section>
        <SliderTest />
      </section>
      <p>switch</p>
      <section>
        <SwitchTest />
      </section>
      <p>TagsInput</p>
      <section>
        <TagsInputTest />
      </section>
      <ConfigTableTest />
      <hr />

      <ModelEditorTest />
      <hr />

      <PromptEditorTest />
      <hr />

      <ChatHistory_Input_Shell_Test />
      <hr />

      <ChatMeessageTest />
      <hr />

      <FeedbackWidgetTest />
      <hr />

      <LogsTableTest />
      <hr />

      <UsageCardTest />
      <hr />

      <DropzoneTest />
      <hr />

      <FileQueueTest />
      <hr />

      <UploadProgressTest />
      <hr />

      <CheckboxTest />
      <hr />

      <FieldTest />
      <hr />

      <FieldsetTest />
      <hr />

      <FileUploadTest />
      <hr />

      <InputTest />
      <hr />

      <PasswordInputTest />
      <hr />

      <NumberInputTest />
      <hr/>

       <RadioTest />
      <hr/>
       <SliderTest />
      <hr/>
       <SwitchTest />
      <hr/>
       <TagsInputTest />
      <hr/>
    </>

  )
}

export default ms