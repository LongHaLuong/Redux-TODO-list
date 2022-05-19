import * as React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export function App() {
  return (
    <>
      <div className="p-5 text-center bg-light ">
        <h1 className="mb-3 text-warning">TODO-List</h1>
        <h4 className="mb-3">llha@tma.com.vn</h4>
        <ul>
          <TodoList />
          <AddTodo />
        </ul>
      </div>
    </>
  );
}
