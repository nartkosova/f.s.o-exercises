import { useState } from 'react'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  const average = (good - bad) / all;
  const positive = (good/all)*100
   const handleGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    setAll(updatedGood)
    setAll (updatedGood + neutral + bad)
  }
     const handleNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setAll(updatedNeutral)
    setAll (updatedNeutral + good + bad)

  }
     const handleBad = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    setAll(updatedBad)
    setAll (updatedBad + neutral + good)
  }
  return (
    <div>
       <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}
export default App