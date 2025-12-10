import { useState } from 'react'
import './App.css'
import './SearchPage.jsx'
import SearchPage from './SearchPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchPage />
    </>
  )
}

export default App
