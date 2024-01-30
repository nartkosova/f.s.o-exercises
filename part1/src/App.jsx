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

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };
  
  const Content = ({ parts }) => {
    return (
      <div>
        <p>
          {parts[0].name} - {parts[0].exercises} exercises
        </p>
        <p>
          {parts[1].name} - {parts[1].exercises} exercises
        </p>
        <p>
          {parts[2].name} - {parts[2].exercises} exercises
        </p>
      </div>
    );
  };
  
  const Total = ({ parts }) => {
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Total exercises: {sum}</p>;
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App