import express, { Request, Response } from "express";
// import expressPromiseRouter from "express-promise-router";
import { TodoService } from "../../application/todoService";
import { todoList } from "../todoListArray";

const app = express();
// const router = expressPromiseRouter();
app.use(express.json());

app.get("/todo", (req: Request, res: Response) => {
  res.status(200).json(todoList);
});

app.post("/todo", async (req: Request, res: Response) => {
  const todo = new TodoService(req.body.id, req.body.title, req.body.completed);
  try {
    const newTask = todo.create();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

app.put("/todo/:id", async (req: Request, res: Response) => {
  const taskId = +req.params.id; // const taskId = parseInt(req.params.id, 10) o const taskId = Number(req.params.id)
  try {
    const updatedTask = todoList[taskId - 1].toggle();
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

app.delete("/todo/:id", async (req: Request, res: Response) => {
  const taskId = +req.params.id;
  try {
    const removedTask = todoList[taskId - 1].remove();
    res.status(204).json(removedTask);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

//---------- NO FUNCIONA ---------
// app.patch("/todo/:id", async (req: Request, res: Response) => {
//   const taskId = +req.params.id;
//   try {
//     const removedTask = todoList[taskId - 1].update();
//     await res.status(204).json(removedTask);
//   } catch (error) {
//     res.status(400).json({ error: "Bad request" });
//   }
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}, close with ^C`);
});
