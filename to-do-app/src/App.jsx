import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './components/Todo'
import Header from './components/Header'



function App() {
  

  return (
    <div>
      <Header/>
      <Todo/>
      {/* <Inlinecomponent/>
      <OutlineComponent/> */}
    </div>
  )
}

export default App
