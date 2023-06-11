import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

function AnecdoteList() {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) =>
    state.anecdotes.sort((a, b) => b.votes - a.votes)
  );
  const filteredText = useSelector((state) => state.filter);

  const filteredAnecdotes = anecdotes.filter((item) => {
    return item.content.includes(filteredText);
  });

  console.log(filteredAnecdotes);

  const renderAnecdotes = filteredText !== "" ? filteredAnecdotes : anecdotes;
  const vote = (id) => {
    dispatch(addVote(id));
  };
  return (
    <>
      {renderAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
