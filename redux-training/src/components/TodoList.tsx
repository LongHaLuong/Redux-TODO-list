import * as React from 'react';

import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { removeTodo, setTodoStatus } from '../redux/todoSlice';

const Label = styled.label`
  color: #b4886b;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 0.7rem;
  margin-left: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid #dea057;
  color: #dea057;
`;

export default function TodoList() {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ul>
      {todoList.map((todo) => (
        <ListGroup className="mb-3">
          <ListGroup.Item>
            <Label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onClick={() => {
                  dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }));
                }}
              />{' '}
              {todo.text}
            </Label>
            <Button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              X
            </Button>{' '}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </ul>
  );
}
