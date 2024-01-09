import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { GetUserController } from "../controllers/GetUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { CreateSessionController } from "../controllers/CreateSessionController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRouter = Router();

usersRouter.post("/users", new CreateUserController().handle);
usersRouter.get("/users/:id", ensureAuthenticated, new GetUserController().handle);
usersRouter.put("/users/:id", ensureAuthenticated, new UpdateUserController().handle);
usersRouter.delete("/users/:id", ensureAuthenticated, new DeleteUserController().handle);

usersRouter.post("/users/sessions", new CreateSessionController().handle);

export { usersRouter }