import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 1, 1: 3, 2: 4, 3: 2, 4: 5, 5: 6, 6: 3, 7: 11 });
  const [mostVoted, setMostVoted] = useState (0)
  const anecdotesLength = anecdotes.length - 1
  const randomSelected = () => (
    setSelected(Math.round(Math.random()*anecdotesLength))
  )
  
  const countVote = () => {
    setVotes(prevVotes => ({
    ...prevVotes, [selected]: (prevVotes[selected] || 0) + 1, }))
    const maxVotedIndex = getMostVotedIndex();
    setMostVoted(maxVotedIndex);
}
  console.log(selected)
  console.log(votes)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <p>has {votes[selected]}</p>
     <p> <button onClick={countVote}>vote</button>
      <button onClick={randomSelected}>next anecdote</button></p>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[mostVoted]}
      <p>has {votes[mostVoted]}</p>
    </div>
  )
}

export default App