import { Stat } from "ai-ui-kit"

const StatTest = () => {
  return (
    <>
      <div>StatTest</div>

      <Stat
        label="Users"
        value={1200}
        formatOptions={{ notation: "compact" }}
      />

      <Stat
        label="Revenue"
        value={25000}
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
      />

      <Stat
        label="Growth"
        value={120}
        change={0.12}
        formatOptions={{ notation: "compact" }}
      />

      <Stat
        label="Custom"
        valueText="Manual text"
        change={-0.2}
      />

    </>
  )
}

export default StatTest