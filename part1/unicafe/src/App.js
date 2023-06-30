import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad > 0) return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text={'good'} value={good}/>
          <StatisticsLine text={'neutral'} value={neutral}/>
          <StatisticsLine text={'bad'} value={bad}/>
          <StatisticsLine text={'all'} value={good + neutral + bad}/>
          <StatisticsLine text={'average'} value={(good-bad)/(good + neutral + bad)}/>
          <StatisticsLine text={'positive'} value={good*100/(good + neutral + bad) + ' %'}/>
        </tbody>
      </table>
    </div>
  )
  else return (
    <p>No feedback given</p>
  )
}

const Button = ({func, text}) => {
  return (
    <button onClick={func}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good + 1)
  const setToNeutral = () => setNeutral(neutral + 1)
  const setToBad = () => setBad(bad + 1)
  return (
    <div>
      <h1>give feedback</h1>
      <Button func={setToGood} text={'good'}/>
      <Button func={setToNeutral} text={'neutral'}/>
      <Button func={setToBad} text={'bad'}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App