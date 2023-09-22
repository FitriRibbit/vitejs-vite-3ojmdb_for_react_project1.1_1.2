import { useState } from 'react';

const DisplayG = (props) => (
  <div>
    <p>good {props.good} </p>
  </div>
);
const DisplayN = (props) => (
  <div>
    <p>neutral {props.neutral} </p>
  </div>
);
const DisplayB = (props) => (
  <div>
    <p>bad {props.bad} </p>
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    console.log('value now', newValue);
    setGood(newValue);
  };

  const setToNeutral = (newValue) => {
    console.log('value now', newValue);
    setNeutral(newValue);
  };

  const setToBad = (newValue) => {
    console.log('value now', newValue);
    setBad(newValue);
  };

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" /> <nbsp />
      <Button
        handleClick={() => setToNeutral(neutral + 1)}
        text="neutral"
      />{' '}
      <nbsp />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1> statistics </h1>
      <DisplayG good={good} />
      <DisplayN neutral={neutral} />
      <DisplayB bad={bad} />
    </div>
  );
};

export default App;
