
const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <ul>
        {props.partlist.map(content => 
          <li key={content.id}>
            {content.name} {content.exercises}
          </li>
        )}
      </ul>
    </div>
  )
}

/*
const Total = (props) => {
  return (
    <div>
      {props.partlist.map(content => 
        <li key={content.id}>
          {content.exercises}
        </li>
      )}
    </div>
  )
}
*/

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      <Content partlist={props.course.parts}/>

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


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
