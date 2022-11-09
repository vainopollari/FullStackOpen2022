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
      <Content name1={part1} sum1={exercises1}
        name2={part2} sum2={exercises2} 
        name3={part3} sum3={exercises3} />
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
       <Part name={props.name1} sum={props.sum1} />
       <Part name={props.name2} sum={props.sum2} />
       <Part name={props.name3} sum={props.sum3} />
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

const Part = (props) => {
  return (
    <div>
      {props.name} {props.sum}
    </div>
  )
}

export default App