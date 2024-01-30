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
  const Header = ({course}) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };
  const Content = (props) => {
    return (
       <div>
        <p>{parts[0].name} {parts[0].exercises} exercises.</p>
      <p>{parts[1].name} {parts[1].exercises} exercises.</p>
      <p>{parts[2].name} {parts[2].exercises} exercises.</p>
      </div>
    );
  };
  const Total = (props) => {
    const sum = parts.reduce((sum, parts) =>  sum + parts.exercises, 0);
    return (
      <div>
        <p>Number of exercises {sum}</p>
      </div>
    );
  };
  console.log(course, parts[1].exercises)
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      
    </div>
  )
}

export default App