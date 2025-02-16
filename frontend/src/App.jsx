import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button class="btn">Button</button>
    <button className="btn btn-outline">Default</button>
    <button className="btn btn-outline btn-primary">Primary</button>
    <button className="btn btn-outline btn-secondary">Secondary</button>
    <button className="btn btn-outline btn-accent">Accent</button>
    </>
  )
}

export default App
