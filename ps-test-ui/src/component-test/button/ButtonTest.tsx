import { Button } from "ai-ui-kit"

interface buttonProps {
    lable: string,
    disable: boolean,
}
const ButtonTest = ({ lable = 'text', disable = false }: buttonProps) => {
    function handleClick() {
        console.log("handle click")
    }
    return (
        <Button onClick={handleClick} disabled={disable}>{lable}</Button>
    )
}
export default ButtonTest