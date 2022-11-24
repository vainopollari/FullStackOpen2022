import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
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
    <div>
      {props.namegood} {props.resultgood} < br />
      {props.nameneutral} {props.resultneutral} < br />
      {props.namebad} {props.resultbad} < br />
      {props.nameaverage} {props.averagelist.reduce((a, b) => a + b, 0) / props.averagelist.length} < br />
      {props.positivename} {props.positiveresult / (props.resultgood + props.resultbad + props.resultneutral)} %

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
        resultgood={good}
        namegood='good'
        resultneutral={neutral}
        nameneutral='neutral'
        resultbad={bad} 
        namebad='bad'
        averagelist={average}
        nameaverage='average'
        positivename='positive'
        positiveresult={positive}

      />
    </div>
  )
}

export default App
