import { Router } from "express";
import { createPost, showPost, fatchPost, updatePost, deletepost } from "../controller/postcontroller.js";
const postRoutes = Router();
postRoutes.get("/:id", showPost);
postRoutes.get("/", fatchPost);
postRoutes.post("/", createPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletepost);

export default postRoutes;