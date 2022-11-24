import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      {props.name} {props.result}
    </div>
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
        result={good}
        name='good' 
      />
      <br />
      <Statistics
        result={bad}
        name='bad' 
      />
      <br />
      <Statistics
        result={neutral}
        name='neutral' 
      />
      <br />
      <Statistics
        result={average.reduce((a, b) => a + b, 0) / average.length}
        name='average' 
      />
      <br />
      <Statistics
        result={positive / (good + neutral + bad)}
        name='positive' 
      />
    </div>
  )
}

export default App
