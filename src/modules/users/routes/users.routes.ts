import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { GetUserController } from "../controllers/GetUserController";

const usersRouter = Router();

usersRouter.post("/users", new CreateUserController().handle);
usersRouter.get("/users/:id", new GetUserController().handle);

export { usersRouter }