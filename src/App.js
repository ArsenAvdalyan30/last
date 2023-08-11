import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 } from "uuid";
import DeleteDialog from "./components/DeleteDialog";
import EditDialog from "./components/EditDialog";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [inputEditValue, setInputEditValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeEdit = (e) => {
    setInputEditValue(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, { title: inputValue, id: v4() }]);
    setInputValue("");
  };

  const onRemoveClick = (itemToDelete) => {
    setItemToDelete(itemToDelete);
  };

  const onEditClick = (itemToEdit) => {
    setItemToEdit(itemToEdit);
  };

  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== itemToDelete.id));
    setItemToDelete(null);
  };

  const handleDeleteDialogClose = () => {
    setItemToDelete(null);
  };

  const handleEdit = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === itemToEdit.id) {
          todo.title = inputEditValue;
        }
        return todo;
      })
    );
    setItemToEdit(null);
  };

  const handleEditDialogClose = () => {
    setItemToEdit(null);
  };

  return (
    <>
      <TextField
        onChange={handleChange}
        value={inputValue}
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      <Button onClick={handleAdd} variant="contained">
        Add
      </Button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <Button onClick={() => onRemoveClick(todo)} variant="contained">
              Delete
            </Button>{" "}
            <Button onClick={() => onEditClick(todo)} variant="contained">
              Edit
            </Button>
          </li>
        ))}
      </ul>

      {itemToDelete && (
        <DeleteDialog
          title={itemToDelete.title}
          onDelete={handleDelete}
          onClose={handleDeleteDialogClose}
        />
      )}

      {itemToEdit && (
        <EditDialog
          onEdit={handleEdit}
          onClose={handleEditDialogClose}
          onChange={handleChangeEdit}
          value={inputEditValue}
        />
      )}
    </>
  );
}
