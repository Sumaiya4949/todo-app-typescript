import { FormEvent, useRef, useContext } from "react";
import styles from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context"

const NewTodoItem: React.FC = () => {
// Extract props
const todosCtx = useContext(TodosContext)
const inputTextRef = useRef<HTMLInputElement>(null)

const submitHandler = (event: FormEvent) => {
  event.preventDefault();

  const inputText = inputTextRef.current!.value;
  
  if (inputText.trim().length === 0) {
    return;
  }
  todosCtx.addTodos(inputText);
}
  return (
    <form  className={styles.form} onSubmit={submitHandler}>
      <label className={styles.label} htmlFor="text">Todo Text</label>
      <input className={styles.input} type='text' id='text' ref={inputTextRef}/>
      <button className={styles.button}>Add Todo</button>
    </form>
  )
}

export default NewTodoItem;