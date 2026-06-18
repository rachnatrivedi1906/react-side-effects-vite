import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Step 3: Define a function that fetches a programming joke from an API
  const fetchJoke = () => {
    setLoading(true)
    setError(null)
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('Failed to fetch joke')
        }
        return res.json()
      })
      .then((data) => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong')
        setLoading(false)
      })
  }

  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} error={error} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
