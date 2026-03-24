import { UsageCard } from "ai-ui-kit";

const UsageCardTest = () => {

    const usageData = {
  label: "Total Users",
  value: 1250,
  description: "Active users this month",
};
  return (
    <div>
      <b><p>User Card </p></b>
      <section>
        {/* <UsageCard></UsageCard> */}
       <UsageCard {...usageData} />
      </section>
    </div>
  )
}

export default UsageCardTest
