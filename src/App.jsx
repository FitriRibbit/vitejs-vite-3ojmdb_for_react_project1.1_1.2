import { useState } from 'react';

const Display = (props) => (
  <div>
    {props.text1} {props.selected} {props.text2}
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
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
  const [mostVoted, setMostVoted] = useState("");  
  
  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = {...points};
    copy[selected] += 1;
    setVote(copy)
    if (copy[selected] > copy[mostVoted]) {
      setMostVoted[selected]
    }
  }

  return (
    <div>
      <Display selected={anecdotes[selected]} />
      <Display text1="has" selected={points[selected]} text2="votes" />
      <Button handleClick={handleVote} text="vote" />
      <nbsp /> <nbsp />
      <Button handleClick={handleAnecdote} text="next anecdote" />
      <Display selected={anecdotes[mostVoted]} />
    
    </div>
  );
};

export default App;
