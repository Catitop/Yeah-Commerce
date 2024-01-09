import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { GetUserController } from "../controllers/GetUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const usersRouter = Router();

usersRouter.post("/users", new CreateUserController().handle);
usersRouter.get("/users/:id", new GetUserController().handle);
usersRouter.put("/users/:id", new UpdateUserController().handle);

export { usersRouter }