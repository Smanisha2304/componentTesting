import ButtonTest from "../component-test/button/ButtonTest"
import ErrorStateTest from "../component-test/core/ErrorStateTest"
import LoaderTest from "../component-test/core/LoaderTest"

const PS = () => {
  return ( <>
    <ButtonTest />
    <LoaderTest />
    <ErrorStateTest />
  </>
  )
}

export default PS