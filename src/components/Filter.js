import React, { useContext } from "react";
import { DispatchContext } from "../AppContext";

const Filter = () => {
  const dispatch = useContext(DispatchContext);

  const handleShowAll = () => {
    dispatch({ type: "SHOW_ALL" });
  };

  const handleShowComplete = () => {
    dispatch({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: "SHOW_INCOMPLETE" });
  };

  return (
    <div className="btn-group mb-3">
      <button
        type="button"
        onClick={handleShowAll}
        className="btn btn-sm btn-outline-primary"
      >
        Show All
      </button>
      <button
        type="button"
        onClick={handleShowComplete}
        className="btn btn-sm btn-outline-primary"
      >
        Show Complete
      </button>
      <button
        type="button"
        onClick={handleShowIncomplete}
        className="btn btn-sm btn-outline-primary"
      >
        Show Incomplete
      </button>
    </div>
  );
};

export default Filter;
