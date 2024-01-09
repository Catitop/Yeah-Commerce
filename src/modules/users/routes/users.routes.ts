import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

const usersRouter = Router();

usersRouter.post("/users", new CreateUserController().handle);

export { usersRouter }