import express from "express";
import { todoList } from "../user/infrastructure/todoListArray";
import { router } from "../user/infrastructure/routes/todoRoutes";

const app = express();
const PORT = process.env.PORT ?? "8000";

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}, close with ^C`);
});

app.use(express.json());
app.use("/todo", router);
