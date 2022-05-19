import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { addTodo } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

const Button = styled.button`
  font-size: 1rem;
  margin-left: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid #dea057;
  background-color: white;
  color: #dea057;
`;

export default function AddTodo() {
  const [todoDescription, setTodoDescription] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  return (
    <form className="mb-3">
      <input onChange={(e) => setTodoDescription(e.target.value)} type="text" value={todoDescription} />
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(addTodo(todoDescription));
          setTodoDescription('');
        }}
      >
        Add Todo
      </Button>
    </form>
  );
}
