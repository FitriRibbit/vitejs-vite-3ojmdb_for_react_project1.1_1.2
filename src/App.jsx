const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.pt1} {props.ex1}
      </p>
      <p>
        {props.pt2} {props.ex2}
      </p>
      <p>
        {props.pt3} {props.ex3}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part pt1={props.part1} ex1={props.exercises1} />
      <Part pt2={props.part2} ex2={props.exercises2} />
      <Part pt3={props.part3} ex3={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} />
      <Content part2={parts[1].name} exercises2={parts[1].exercises} />
      <Content part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
};

export default App;
