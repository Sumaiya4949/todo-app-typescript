import { FormEvent, useRef } from "react";

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
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type='text' id='text' ref={inputTextRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodoItem;