import express from "express";
import {
  getAll,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/todocontrollers";

export const router = express.Router();

router.get("/todo", getAll);
router.post("/todo", createTask);
router.put("/todo/:id", updateTask);
router.delete("/todo/:id", deleteTask);
