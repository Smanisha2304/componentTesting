import { CustomPieChart } from "ai-ui-kit"

const data = [
  { name: "A", value: 40, color: "blue.solid" },
  { name: "B", value: 30, color: "green.solid" },
  { name: "C", value: 20, color: "red.solid" },
  { name: "D", value: 10, color: "orange.solid" },
]

const PieChartTest = () => {
  return (
    <>
      <div>PieChartTest</div>

  <CustomPieChart
  data={data}
  size="400px"
  showTooltip
  showLegend
  labelType="inside"
  showStroke
/>

    </>
  )
}

export default PieChartTest