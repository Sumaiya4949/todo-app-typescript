import { FormEvent, FormEventHandler } from "react";

const submitHandler = (event: FormEvent) => {
  event.preventDefault();
}
const NewTodoItem = () => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type='text' id='text'/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodoItem;