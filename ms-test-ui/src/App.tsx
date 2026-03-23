import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ConfigTable, Loader } from 'ai-ui-kit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Loader></Loader>
      </section>
    </>
  )
}

export default App
