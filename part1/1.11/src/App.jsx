import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return <tr><td>{text}</td><td>{value * 100}%</td></tr>
  }
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = ({ good, neutral, bad }) => {
  const amount = good + neutral + bad

  if (amount > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={amount} />
            <StatisticsLine text="average" value={(good - bad) / amount} />
            <StatisticsLine text="positive" value={good / amount} />
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>No feedback given</div>
  )
}

const App = () => {

  const [all, setAll] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleGoodClick = () => {
    const updatedGood = all.good + 1
    setAll({ ...all, good: updatedGood })

  }

  const handleNeutralClick = () => {
    const updatedNeutral = all.neutral + 1
    setAll({ ...all, neutral: updatedNeutral })

  }

  const handleBadClick = () => {
    const updatedBad = all.bad + 1
    setAll({ ...all, bad: updatedBad })
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick} text={"good"} />
      <Button onClick={handleNeutralClick} text={"neutral"} />
      <Button onClick={handleBadClick} text={"bad"} />
      <Statistics {...all} />
    </div>
  )
}

export default App