import { Todo } from "../models/Todo";
import TodoList from "./TodoList";
import style from "./Todos.module.css";

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul className={style.todos}>
      {props.items.map((item) => (
      <TodoList todo={item} />
    ))}
    </ul>
  )
}

export default Todos;