import { Todo } from "../models/Todo";
import TodoList from "./TodoList";
import style from "./Todos.module.css";
import { TodosContext } from "../store/todos-context"
import { useContext } from "react";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={style.todos}>
      {todosCtx.items.map((item) => (
      <TodoList todo={item} removeTodo={todosCtx.removeTodo.bind(null, item.id)}/>
    ))}
    </ul>
  )
}

export default Todos;