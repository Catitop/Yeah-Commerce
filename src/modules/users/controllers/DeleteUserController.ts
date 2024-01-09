import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const  { id: loggedUser } = request.user;

        const deleteUserService = new DeleteUserService();

        await deleteUserService.execute(id, loggedUser);

        return response.status(200).send();
    }
}

export { DeleteUserController }