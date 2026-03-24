import { Avatar } from "ai-ui-kit"

const AvatarTest = () => {
  return (
    <>
      <div>AvatarTest</div>

      <Avatar
        name="Punit"
        src="https://media.istockphoto.com/id/2228764569/photo/hispanic-female-software-developer-coding-at-night-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=8nU7XeXb1aKrQ4UbMCJm9B6EYE_ovWqPu5kNnQ7GGJM="
        loading="lazy"
        size={'xl'}
        variant={'solid'}
      />

    </>
  )
}

export default AvatarTest