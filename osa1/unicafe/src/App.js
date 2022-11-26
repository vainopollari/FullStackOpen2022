import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value * 100} % </td>
      </tr>
       
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.averagelist.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticLine text='good' value={props.resultgood} />
      <StatisticLine text='neutral' value={props.resultneutral} />
      <StatisticLine text='bad' value={props.resultbad} />
      <StatisticLine text='average' value={props.averagelist.reduce((a, b) => a + b, 0) / props.averagelist.length} />
      <StatisticLine text='positive' value={props.positiveresult / (props.resultgood + props.resultbad + props.resultneutral)} />
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState([])
  const [positive, setPositve] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setPositve(positive + 1)
    setAverage(average.concat(1))
  }
  const increaseNeutral = () =>  {
    setNeutral(neutral + 1)
    setAverage(average.concat(0))
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAverage(average.concat(-1))
  } 

  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        handleClick={increaseGood}
        text='good'
      />
      <Button
        handleClick={increaseNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseBad}
        text='bad'
      />
      <h1>Statistics</h1>
      <Statistics
        resultgood={good}
        resultneutral={neutral}
        resultbad={bad} 
        averagelist={average}
        positiveresult={positive}
      />
    </div>
  )
}

export default App
