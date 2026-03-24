import { Badge } from "ai-ui-kit"

const BadgeTest = () => {
  return (
    <>
      <div>BadgeTest</div>

      <Badge
        sizes={{
          base: "xs",
          md: "md",
          xl: "lg",
        }}
        variants={{
          base: "subtle",
          md: "solid",
        }}
        colorPalettes={{
          base: "gray",
          md: "blue",
          xl: "green",
        }}
      >
        Active
      </Badge>

    </>
  )
}

export default BadgeTest