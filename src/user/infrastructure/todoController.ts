import express, { Request, Response } from "express";

import { TodoService } from "../application/todoService";

const app = express();
app.use(express.json());

const todo = new TodoService();

app.get("/todo", (_req: Request, res: Response) => {
  const allTasks = todo.show();
  res.status(200).json(allTasks);
});

app.post("/todo", (req: Request, res: Response) => {
  const newTask = todo.create(req.body);
  res.status(201).json(newTask);

  res.status(400).json({ error: "Bad request" });
});

app.put("/todo/:id", async (req: Request, res: Response) => {
  const taskId = +req.params.id; // const taskId = parseInt(req.params.id, 10)
  try {
    const updatedTask = todo.update(taskId, req.body.title, req.body.completed);
    await res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

app.delete("/todo/:id", async (req: Request, res: Response) => {
  const taskId = +req.params.id;
  try {
    const removedTask = todo.remove(taskId);
    await res.status(204).json(removedTask);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}, close with ^C`);
});
