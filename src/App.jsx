import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pingv from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Page_1 from './components/Page_1/Page_1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Page_1 />
     
    </>
  );
}

export default App
