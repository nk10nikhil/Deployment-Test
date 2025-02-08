import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <>

      <h1>Deployment Test</h1>
      <h2>Here are {jokes.length} jokes</h2>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>Joke {joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
