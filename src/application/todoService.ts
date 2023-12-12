import { todoList } from "../infrastructure/todoListArray";
import { Task } from "../domain/entities/task";
import { IService } from "../domain/repositories/todoRepository";

export class TodoService extends Task implements IService {
  constructor(id: number, title: string, completed: boolean) {
    super(id, title, completed);
    this.id = this.generateId();
  }

  create(): void {
    todoList.push(this);
  }

  toggle(): void {
    this.completed = !this.completed;
  }

  remove(): void {
    const index = todoList.findIndex((element) => element.id === this.id);
    if (index > -1) {
      todoList.splice(index, 1);
    }
  }

  showTask(): string {
    return this.title;
  } // metodo creado pero no usado

  show(): Task[] {
    return todoList;
  } // metodo creado pero no usado

  generateId(): number {
    return todoList.length + 1;
  }
}
