import { FormEvent, useRef } from "react";
import styles from './NewTodo.module.css';

const NewTodoItem: React.FC<{ onAddTodo: ( text: string ) => void }> = (props) => {
// Extract props
const { onAddTodo } = props;
const inputTextRef = useRef<HTMLInputElement>(null)

const submitHandler = (event: FormEvent) => {
  event.preventDefault();

  const inputText = inputTextRef.current!.value;
  
  if (inputText.trim().length === 0) {
    return;
  }
  onAddTodo(inputText);
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