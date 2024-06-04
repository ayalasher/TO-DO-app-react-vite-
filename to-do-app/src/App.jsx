import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './components/Todo'
import Inlinecomponent from './components/Inlinecomponent'
import OutlineComponent from './components/OutlineComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Todo/> */}
      <Inlinecomponent/>
      <OutlineComponent/>
    </div>
  )
}

export default App
