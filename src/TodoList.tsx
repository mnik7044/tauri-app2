import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void; // Add the deleteTodo prop
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </li>
    ))}
  </ul>
);


export default TodoList


