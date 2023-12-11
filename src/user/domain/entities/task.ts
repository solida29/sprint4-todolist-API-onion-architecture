// export interface ITask {
//   id: number;
//   title: string;
//   completed: boolean;
// }

//-------- TODO ITEM -------
// let list: Task[] = [];

export class Task {
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }

  // add() {
  //   list.push(this);
  // }

  // toggle() {
  //   this.completed = !this.completed;
  // }

  // delete() {
  //   list = list.filter((element) => element.title !== this.title);
  // }

  // showTask() {
  //   return this.title;
  // }

  // showList() {
  //   let print: string = "";
  //   for (let i = 0; i < list.length; i++) {
  //     print +=
  //       list[i].title + ": " + (list[i].completed ? "done" : "to do") + "\n";
  //   }
  //   return print;
  // }
}
