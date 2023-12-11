import { todoList } from "../infrastructure/todoListArray";
import { Task } from "../domain/entities/task";
import { IService } from "../domain/repositories/todoRepository";

export class TodoService extends Task {
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
  }

  show(): Task[] {
    return todoList;
  }

  generateId(): number {
    return todoList.length + 1;
  }
}

// export class TodoService implements Service {
//   private readonly todoList: Task[] = [];

//   generateId(): number {
//     return this.todoList.length + 1;
//   }

//   show(): Task[] {
//     return this.todoList;
//   }

//   create(task: Task): Task {
//     const newTask: Task = {
//       id: this.generateId(),
//       title: task.title,
//       completed: false,
//     };
//     return newTask;
//   }

//   update(id: number, title?: string, completed?: boolean): void {
//     const oldTask = this.todoList.find((task) => task.id === id);
//     if (!oldTask) {
//       throw new Error(`Task with id ${id} is not found`);
//     }
//     if (title !== undefined) {
//       oldTask.title = title;
//     }
//     if (completed !== undefined) {
//       oldTask.completed = completed;
//     }
//   }

// remove(): void {
//   todoList.filter((element) => element.title !== this.title);
// }

//   remove(id: number): void {
//     const index = this.todoList.findIndex((element) => element.id === id);
//     if (index > -1) {
//       this.todoList.splice(index, 1);
//     }
//   }
// }

// const lista = new TodoService();
// const newTask: Task = {
//   title: 'Tâche 1'
// };

// const newTask2: Task = {
//   title: 'Tâche 2'
// };

// lista.create(newTask);
// lista.create(newTask2);
// console.log(lista);

// lista.update(2, 'tache 2 changée');
// console.log(lista);

// console.log(lista.show());

// lista.remove(2);
// console.log(lista);

// const newTask3: Task = {
//   title: 'Tâche 3'
// };
// lista.create(newTask3);
// console.log(lista);

// lista.remove(6);
// console.log(lista);

// lista.update(2, 'tache 2 changée 2e fois');
// console.log(lista);
