import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
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
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
      average {average.reduce((a, b) => a + b, 0) / average.length} <br />
      positive {positive / (good + neutral + bad)}

    </div>
  )
}

export default App
