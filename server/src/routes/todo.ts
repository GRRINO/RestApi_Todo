import { Router } from "express";
import { createNewTodo, deleteTodos, getSingleTOdos, getTodos, updateTodo } from '../controllers/todo';

const router = Router()

router.post("/create",createNewTodo)
router.get("/getData",getTodos)
router.get("/getData/:id",getSingleTOdos)
router.put("/update/:id",updateTodo)
router.delete("/delete/:id",deleteTodos)

export default router;



