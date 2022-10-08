import { Todo } from "../models/Todo";
import TodoList from "./TodoList";

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
      <TodoList todo={item} />
    ))}
    </ul>
  )
}

export default Todos;