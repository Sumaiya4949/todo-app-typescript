import { Todo } from "../models/Todo";
import styles from "./TodoItem.module.css"
import { TodosContext } from "../store/todos-context"
import { useContext } from "react";

const TodoList:React.FC<{todo: Todo, removeTodo: () => void}> = (props) => {
  const todosCtx = useContext(TodosContext)
  return <li className={styles.item} key={props.todo.id} onClick={props.removeTodo}>{props.todo.todo}</li>
}

export default TodoList;