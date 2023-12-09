import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { Task } from "./user/domain/entities/task";

const app = express();
app.use(bodyParser.json());
let todos: Task[] = [];

// GET endpoint to fetch all todo items
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST endpoint to create a new todo item
// provide `title` and optionally `completed` in the request body as JSON
app.post("/todos", (req: Request, res: Response) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed || false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT endpoint to update an existing todo item with the specified `id`
// provide updated `title` and/or `completed` in the request body as JSON
app.put("/todos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todo.title = req.body.title || todo.title;
  todo.completed = req.body.completed || todo.completed;
  res.json(todo);
});

// DELETE endpoint to remove an existing todo item with the specified `id`
app.delete("/todos/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

// run the server on port 3000
// for example the app can run locally at this URL: http://localhost:8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
