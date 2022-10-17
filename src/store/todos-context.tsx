
import React, { createContext, useState } from "react"
import { Todo } from "../models/Todo"

type TodoContextType = {
    items: Todo[];
    addTodos: (text: string) => void;
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodoContextType>({
    items: [],
    addTodos: (text: string) => {},
    removeTodo: (id: string) => {}  
})

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {

    const [todo, setTodo] = useState<Todo[]>([]); 

    const addTodoHandler = (text: string) => {
        setTodo((prevState => [...prevState, new Todo(text)]))
    }

    const removeUnwantedTodo = (id: string) => {
     setTodo((prevState) => prevState.filter(todo => todo.id !== id));
    }

    const contextValue: TodoContextType = {
        items: todo,
        addTodos: addTodoHandler,
        removeTodo: removeUnwantedTodo
    }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider> 
};

export default TodosContextProvider;