const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.num}
      </p>
    </div>
  )
}
const Content = (props) => {
  const [class1, class2, class3] = props.info
  return (
    <div>
      <Part name={class1.name} num={class1.exercises}/>
      <Part name={class2.name} num={class2.exercises}/>
      <Part name={class3.name} num={class3.exercises}/>
    </div>
  )
}
const Total = (props) => {
  const [class1, class2, class3] = props.info
  const sum = class1.exercises + class2.exercises + class3.exercises
  return (
    <div>
      <p>
      Number of exercises {sum}.
      </p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content info={course.parts} />
      <Total info={course.parts}/>
    </div>
  )
}

export default App
