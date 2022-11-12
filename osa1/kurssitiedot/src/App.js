const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
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
       {props.parts[0].name} {props.parts[0].exercises} <br />
       {props.parts[1].name} {props.parts[1].exercises} <br />
       {props.parts[2].name} {props.parts[2].exercises}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}

/*
const Part = (props) => {
  return (
    <div>
      {props.name} {props.sum}
    </div>
  )
}
*/

export default App