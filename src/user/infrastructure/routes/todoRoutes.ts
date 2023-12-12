import express from "express";
import {
  getAll,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/todoControllers";

export const router = express.Router();

router.get("/", getAll);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
