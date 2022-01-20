import React, { useState, useContext } from "react";
import { DispatchContext } from "../AppContext";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const dispatch = useContext(DispatchContext);
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      dispatch({ type: "ADD_TODO", task, id: uuidv4() });
    }
    setTask("");
  };

  const handleChange = (event) => setTask(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="form-control"
        placeholder="Add Todo"
      />
      <div className="input-group-append">
        <span className="input-group-text">Add Todo</span>
      </div>
    </form>
  );
};

export default AddTodo;
