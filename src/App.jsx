import { useState } from 'react';

const Statistics = (props) => (
  <div>
    <p>good {props.good} </p>
    <p>neutral {props.neutral} </p>
    <p>bad {props.bad} </p>
    <p>all {props.good + props.neutral + props.bad} </p>
    <p>
      average {(props.good * 1 + props.bad * -1) /
        (props.good + props.neutral + props.bad)}
    </p>
    <p>
      positive {(props.good / (props.good + props.neutral + props.bad)) * 100} %
    </p>
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

  if ( good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <h1> give feedback </h1>
        <Button handleClick={() => setToGood(good + 1)} text="good" /> <nbsp />
        <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/> <nbsp />
        <Button handleClick={() => setToBad(bad + 1)} text="bad" />
        <h1> statistics </h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1> give feedback </h1>
        <Button handleClick={() => setToGood(good + 1)} text="good" /> <nbsp />
        <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" /> <nbsp />
        <Button handleClick={() => setToBad(bad + 1)} text="bad" />
        <h1> statistics </h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    );
  };
};

export default App;
