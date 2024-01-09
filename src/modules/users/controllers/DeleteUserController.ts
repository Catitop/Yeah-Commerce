import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteUserService = new DeleteUserService();

        try{
            await deleteUserService.execute(id);
            return response.status(200).send();
        } catch(e) {
            return response.status(404).send(e.message);
        }
    }
}

export { DeleteUserController }