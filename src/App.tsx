import './App.css';
import Todos from "./components/Todos"
import {Todo} from "./models/Todo";

function App() {
  const todos = [new Todo("learn java"), new Todo("learn python")]
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
