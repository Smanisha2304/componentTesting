import { LogsTable } from "ai-ui-kit"
import type { LogItem } from "ai-ui-kit";

const LogsTableTest= () => {


      const logs: LogItem[] = [
  {
    id: "1",
    message: "API failure",
    status: "error",
    latency: 100,
    timestamp: "10:00 AM"
  }
];
  return (
    <div>
      <b><p>logsTable</p></b>

      <section>
        <LogsTable logs={logs}>

        </LogsTable>
      </section>
    </div>
  )
}

export default LogsTableTest
