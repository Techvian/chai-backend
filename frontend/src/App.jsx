import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [joke, setJoke] = useState('')
  return (
    <>
      <div>
        <h1>
          Welcome to Ayush World!
        </h1>
        <p>JOKES : {joke.length}</p>

        {
          jokes.map((joke, index) => {
            return (
              <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
