import React, {useReducer} from 'react';
import useCombinedReducers from 'use-combined-reducers';
import initialTodos from "./data/todos";
import filterReducer from "./reducers/filterReducer";
import todoReducer from "./reducers/todoReducer";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import DispatchContext from "./DispatchContext";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const [state, dispatch] = useCombinedReducers({
        filter: useReducer(filterReducer, 'ALL'),
        todos: useReducer(todoReducer, initialTodos),
    });

    const {filter, todos} = state;

    const filteredTodos = todos.filter(todo => {
        if (filter === 'ALL') {
            return true;
        }
        if (filter === 'COMPLETE' && todo.complete) {
            return true;
        }
        return filter === 'INCOMPLETE' && !todo.complete;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-4">
                    <DispatchContext.Provider value={dispatch}>
                        <Filter/>
                        <TodoList todos={filteredTodos}/>
                        <AddTodo/>
                    </DispatchContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default App;