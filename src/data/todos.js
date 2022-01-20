import { v4 as uuidv4 } from 'uuid';

const initialTodos = [
  {
    id: uuidv4(),
    task: "Book appointment",
    complete: true
  },
  {
    id: uuidv4(),
    task: "Collect parcel",
    complete: true
  },
  {
    id: uuidv4(),
    task: "Upgrade laptop",
    complete: false
  },
  {
    id: uuidv4(),
    task: "Clean car",
    complete: false
  },
  {
    id: uuidv4(),
    task: "Post letters",
    complete: false
  }
];

export default initialTodos;
