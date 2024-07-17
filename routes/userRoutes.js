import {Router} from "express";
import {createuser,updateUser,fatchUser,showUser,deleteuser} from "../controller/usercontroller.js";
const userRoutes=Router();
userRoutes.get("/:id",showUser);
userRoutes.get("/",fatchUser);
userRoutes.post("/",createuser);
userRoutes.put("/:id",updateUser);
userRoutes.delete("/:id",deleteuser);

export default userRoutes;