import ConfigTable_Test from '../component-test/admin/ConfigTable'
import ModelEditorTest from '../component-test/admin/ModelEditor'
import PromptEditorTest from '../component-test/admin/PromptEditor'
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

const ms = () => {
  return (
    <div>
      <ConfigTable_Test />
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
    </div>
  )
}

export default ms