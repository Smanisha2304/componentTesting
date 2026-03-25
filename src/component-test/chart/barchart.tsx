import { BarChart } from "ai-ui-kit"

const data = [
  { month: "Jan", sales: 120, profit: 40 },
  { month: "Feb", sales: 150, profit: 60 },
  { month: "Mar", sales: 180, profit: 70 },
]

const BarChartTest = () => {
  return (
    <>
      <div>BarChartTest</div>

      <BarChart
    
        data={data}
        xKey="month"
        height={300}
        barSize={30}
        barGap={4}
        showGrid
        showTooltip
        showLegend
        rounded
        stacked={false}
        percent={false}
        yFormatter={(v) => `${v}`}
        xFormatter={(v) => v}
        series={[
          {
            name: "sales",
            color: "blue.solid",
            showLabel: true,
          },
          {
            name: "profit",
            color: "green.solid",
            showLabel: true,
          },
        ]}
      />

    </>
  )
}

export default BarChartTest