import uuid from "uuid/v4";

const initialTodos = [
  {
    id: uuid(),
    task: "Book appointment",
    complete: true
  },
  {
    id: uuid(),
    task: "Collect parcel",
    complete: true
  },
  {
    id: uuid(),
    task: "Upgrade laptop",
    complete: false
  },
  {
    id: uuid(),
    task: "Clean car",
    complete: false
  },
  {
    id: uuid(),
    task: "Post letters",
    complete: false
  }
];

export default initialTodos;
