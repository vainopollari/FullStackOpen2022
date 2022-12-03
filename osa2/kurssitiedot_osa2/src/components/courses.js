const Header = (props) => {
    return (
      <h2>
        {props.name}
      </h2>
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
  
  
  const Total = (props) => {
    var result = props.partlist.reduce(function (acc, obj) { return acc + obj.exercises; }, 0)
    return (
      <div>
        Total of {result} exercises
      </div>
    )
  }
  
  
  const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name} />
        <Content partlist={props.course.parts}/>
        <Total partlist={props.course.parts}/>
      </div>
    )
  }
  
  const AllCourses = (props) => {
    const courses = props.courses
    return (
      <div>
        {
          courses.map((elem) => (
            <Course course={elem} key={elem.id} />
          ))
        }
      </div>
    )
  }

  export default AllCourses