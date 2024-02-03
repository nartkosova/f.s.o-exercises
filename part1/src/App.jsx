import { useState } from 'react'
const Statistic = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);//1.9 done
const Statistics = ({ good, neutral, bad, all }) => {
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;
  if (all==0){
    return(
    <p>No feedback given</p>
    )
  }else{
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={`${positive} %`} />
    </div>
  );}
};
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}
export default App