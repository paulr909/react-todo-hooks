import { v4 as uuidv4 } from "uuid";

const initialTodos = [
  {
    id: uuidv4(),
    task: "Clean car",
    complete: false,
  },
  {
    id: uuidv4(),
    task: "Post letters",
    complete: false,
  },
];

export default initialTodos;
