import { Accordion } from "ai-ui-kit"

const AccordionTest = () => {
  return (
    <>
      <div>AccordionTest</div>

      <Accordion
        items={[
          {
            value: "1",
            title: "Section 1",
            content: "Content 1",
          },
          {
            value: "2",
            title: "Section 2",
            content: "Content 2",
          },
          {
            value: "3",
            title: "Section 3",
            content: "Content 3",
            disabled: true,
          },
        ]}
      />

    </>
  )
}

export default AccordionTest