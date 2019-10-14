import uuid from "uuid/v4";

const initialTodos = [
    {
        id: uuid(),
        task: 'Book Appointment',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Collect Kids',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Upgrade Laptop',
        complete: false,
    },
     {
        id: uuid(),
        task: 'Clean car',
        complete: false,
    },
];

export default initialTodos;