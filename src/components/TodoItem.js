import { Button } from "@mui/material";

function TodoItem({ todos, onRemove, onEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <Button onClick={() => onRemove(todo)}>remove</Button>
          <Button onClick={() => onEdit(todo)}>Edit</Button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
