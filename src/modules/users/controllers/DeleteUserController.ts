import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const  { id: loggedUser } = request.user;

        const deleteUserService = new DeleteUserService();

        try{
            await deleteUserService.execute(id, loggedUser);
            return response.status(200).send();
        } catch(e) {
            let statusCode = 404;
            if(e.message === "Operation is not allowed!") statusCode = 400
            return response.status(statusCode).send(e.message);
        }
    }
}

export { DeleteUserController }