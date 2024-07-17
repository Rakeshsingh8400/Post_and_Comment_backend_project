import { Router } from "express";
import { createComment, showcomment, fatchComment, updatecomment, deletecomment } from "../controller/commentcontroller.js";
const commentRoutes = Router();
commentRoutes.get("/:id", showcomment);
commentRoutes.get("/", fatchComment);
commentRoutes.post("/", createComment);
commentRoutes.put("/:id", updatecomment);
commentRoutes.delete("/:id", deletecomment);

export default commentRoutes;