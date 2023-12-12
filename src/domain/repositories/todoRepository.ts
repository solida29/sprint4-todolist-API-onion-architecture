import { Task } from "../entities/task";

export interface IService {
  show(): Task[];
  create(): void;
  toggle(): void;
  remove(): void;
}
