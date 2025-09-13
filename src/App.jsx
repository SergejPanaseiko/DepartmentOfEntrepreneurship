import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pingv from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <a
          href="http://umsf.dp.ua/struktura/2021-03-09-08-36-26/kafedra-pidpryiemnytstva-ta-ekonomiky-pidpryiemstva"
          target="_blank"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          href="http://umsf.dp.ua/struktura/2021-03-09-08-36-26/kafedra-pidpryiemnytstva-ta-ekonomiky-pidpryiemstva"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => (count = 0))}>
          count Обнулить
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
