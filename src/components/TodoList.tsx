import { Todo } from "../models/Todo";

const TodoList:React.FC<{todo: Todo}> = (props) => {
  return <li key={props.todo.id}>{props.todo.todo}</li>
}

export default TodoList;