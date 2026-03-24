import { Card } from "ai-ui-kit"

const CardTest = () => {
    return (
        <>
            <div>CardTest</div>

            <Card
                headerTitle="User Profile"
                headerDescription="Basic info"
                bodyContent={<div>This is body content</div>}
                footerContent={<button>Action</button>}
                imageSrc="https://media.istockphoto.com/id/2228764569/photo/hispanic-female-software-developer-coding-at-night-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=8nU7XeXb1aKrQ4UbMCJm9B6EYE_ovWqPu5kNnQ7GGJM="
                variant="elevated"
                size="md"
                direction="column"
            />

        </>
    )
}

export default CardTest