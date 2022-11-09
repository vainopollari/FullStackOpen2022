const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name={part1} sum={exercises1} />
      <Content name={part2} sum={exercises2} />
      <Content name={part3} sum={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
       {props.name} {props.sum}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.sum}
    </div>
  )
}

export default App