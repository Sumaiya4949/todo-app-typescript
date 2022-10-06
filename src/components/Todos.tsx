import { Todo } from "../models/Todo";

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </ul>
  )
}

export default Todos;