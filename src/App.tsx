import './App.css';
import Todos from "./components/Todos"
import NewTodoItem from './components/NewTodoItem';
import {Todo} from "./models/Todo";
import { useState } from 'react';

function App() {
  const todos = [new Todo("learn java"), new Todo("learn python")];

  const [todo, setTodo] = useState<Todo[]>(todos); 

  const addTodoHandler = (text: string) => {
    setTodo((prevState => [...prevState, new Todo(text)]))
  }

  return (
    <div className="App">
      <NewTodoItem onAddTodo={addTodoHandler}/>
      <Todos items={todo} />
    </div>
  );
}

export default App;
