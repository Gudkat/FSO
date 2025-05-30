import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

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
  const getRndmIndex = () => Math.floor(Math.random() * anecdotes.length)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [mostPopular, setMostPopular] = useState({index: 0, amount: 0})

  const handleNextClick = () => {
    const rando = getRndmIndex()
    setSelected(rando)
  }

  const handleVoteClick = () => {
    const newCount = votes[selected] + 1
    const newVotes = [...votes]
    newVotes[selected] = newCount
    setVotes(newVotes)
    if (newCount > mostPopular.amount) {
      setMostPopular({index: selected, amount: newCount})
    }
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <div>{anecdotes[selected]}</div>
        <div>has {votes[selected]} votes</div>
        <Button onClick={handleNextClick} text={"next anecdote"} />
        <Button onClick={handleVoteClick} text={"vote"} />
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <div>{anecdotes[mostPopular.index]}</div>
        <div>has {mostPopular.amount} votes</div>
      </div>
    </div>

  )
}

export default App