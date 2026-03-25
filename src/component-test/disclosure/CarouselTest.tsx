import { Carousel } from "ai-ui-kit"

const CarouselTest = () => {
  const items = [
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" },
  ]

  return (
    <>
      <div>CarouselTest</div>

      <Carousel
        items={items}
        renderItem={(item) => (
          <div
            style={{
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#eee",
            }}
          >
            {item.text}
          </div>
        )}
        showControls
        showIndicators
      />

    </>
  )
}

export default CarouselTest