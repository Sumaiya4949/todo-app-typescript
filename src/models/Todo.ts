export class Todo {
  id: string;
  todo: string;

  constructor(todoText: string) {
    this.todo = todoText;
    this.id = new Date().toISOString();
  }
}
