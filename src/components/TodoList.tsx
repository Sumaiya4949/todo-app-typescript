import { Todo } from "../models/Todo";
import styles from "./TodoItem.module.css"

const TodoList:React.FC<{todo: Todo}> = (props) => {
  return <li className={styles.item} key={props.todo.id}>{props.todo.todo}</li>
}

export default TodoList;