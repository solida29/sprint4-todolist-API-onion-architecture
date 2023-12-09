import { Task } from "../entities/task";

export interface Service {
  show(): Task[];
  create(task: Task): Task;
  update(id: number, title?: string, completed?: boolean): void;
  remove(id: number): void;
}
