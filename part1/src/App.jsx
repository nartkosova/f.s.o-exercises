import { useState } from 'react'
const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
)
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
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
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}
export default App