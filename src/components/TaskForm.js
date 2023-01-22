import { useState, useEffect, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [tittle, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ tittle: tittle, description: description });
    setTitle('')
    setDescription('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={tittle}
        autoFocus
      />
      <input
        placeholder="Escribe tu descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Guardar</button>
    </form>
  );
}
export default TaskForm;
