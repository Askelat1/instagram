import { useState } from 'react'
import MainPage from './page/MainPage.jsx'

// import module from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
      <MainPage />
  )
}

export default App
