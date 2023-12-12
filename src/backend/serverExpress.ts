import express from "express";
import { router } from "../user/infrastructure/routes/todoRoutes";
import { noCacheMiddleware } from "./middleware/middleware-nocache";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT ?? "8000";
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(noCacheMiddleware);
app.use("/todo", router);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}, close with ^C`);
});
