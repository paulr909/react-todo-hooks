import React, { useContext } from "react";
import DispatchContext from "../DispatchContext";

const TodoItem = ({ todo }) => {
  const dispatch = useContext(DispatchContext);

  const handleChange = () =>
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id
    });

  return (
    <li className="form-check">
      <label className="form-check-label">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
          className="form-check-input"
        />
        {todo.task}
      </label>
    </li>
  );
};

export default TodoItem;
