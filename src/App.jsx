import { useState } from 'react';

const Display = (props) => (
  <div>
    {props.text1} {props.selected} {props.text2}
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const MostVotes = (props) => (
  <div>
    <div>{props.anecdotes} </div>
    <div>has <b>{props.max}</b> votes</div>
  </div>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setVote] = useState(new Uint8Array(8));

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setVote(copy);
  };

  const max = Math.max(...points);
  const index = points.indexOf(max);

  if (max === 0) {
    return (
      <div>
        <h1>Anecdote Of The Day</h1>
        <Display selected={anecdotes[selected]} />
        <Display text1="has" selected={points[selected]} text2="votes" />
        <Button handleClick={handleVote} text="vote" />
        <nbsp /> <nbsp />
        <Button handleClick={handleAnecdote} text="next anecdote" />
        <h1>Anecdote With The Most Votes</h1>
        <p>There are still <b>0</b> vote</p>
      </div>
    );
  } else {  
  return (
    <div>
      <h1>Anecdote Of The Day</h1>
      <Display selected={anecdotes[selected]} />
      <Display text1="has" selected={points[selected]} text2="votes" />
      <Button handleClick={handleVote} text="vote" />
      <nbsp /> <nbsp />
      <Button handleClick={handleAnecdote} text="next anecdote" />
      <h1>Anecdote With The Most Votes</h1>
      <MostVotes anecdotes={anecdotes[index]} max={max} />
    </div>
  );
  };
};

export default App;
