import { Image } from "ai-ui-kit"

const ImageTest = () => {
  return (
    <>
      <div>ImageTest</div>

      
      <Image
        src="https://images.unsplash.com/photo-1774249890206-081fd2e702d5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="size test"
        maxW="300px"
        maxH="200px"
        objectFit="cover"
        fallbackSrc="https://images.unsplash.com/photo-1774230380285-bb1104cef073?q=80&w=3346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

    </>
  )
}

export default ImageTest