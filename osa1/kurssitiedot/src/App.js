const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content name1={part1.name} sum1={part1.exercises}
        name2={part2.name} sum2={part2.exercises} 
        name3={part3.name} sum3={part3.exercises} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
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