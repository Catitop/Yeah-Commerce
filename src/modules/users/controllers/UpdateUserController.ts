import { Request, Response} from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const data = request.body;
        const { id: loggedUser } = request.user;

        const updateUserService = new UpdateUserService();

        await updateUserService.execute(id, data, loggedUser);
        return response.status(200).send();
    }
}

export { UpdateUserController }