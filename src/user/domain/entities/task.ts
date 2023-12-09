export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

//-------- TODO ITEM -------
// let list: Todo[] = [];

// class Todo {
//     task: string;
//     completed: boolean;

//     constructor(task: string, completed: boolean) {
//         this.task = task;
//         this.completed = false;
//     }
//     add() {
//         list.push(this)
//     }

//     toggle() {
//         this.completed = !this.completed;
//     }

//     delete() {
//         list = list.filter((element) => element.task !== this.task);
//     }

//     showTask() {
//         return this.task;
//     }

//     showList() {
//         let print: string = '';
//         for (let i = 0; i < list.length; i++) {
//             print += list[i].task + ': ' + (list[i].completed  ? 'done' : 'to do') + '\n';
//         }
//         return print;
//     }
