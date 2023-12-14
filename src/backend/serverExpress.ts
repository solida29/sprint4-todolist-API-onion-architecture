import express from "express";
import { router } from "../infrastructure/routes/todoRoutes";
import { noCacheMiddleware } from "./middleware/middleware-nocache";
import cors from "cors";
import helmet from "helmet";
import "./load-environments"; // importamos el aviso que usamos variables de entorno

const app = express();
const PORT = process.env.PORT ?? "8000"; //se usa o el archivo del process.env o el 8000
app.use(helmet());
app.use(cors()); // se usa el CORS
app.use(noCacheMiddleware); // usamos el middleware No-Cache
app.use(express.json());
app.use("/todo", router);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}, close with ^C`);
});
