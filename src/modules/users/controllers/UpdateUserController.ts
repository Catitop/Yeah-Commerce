import { Request, Response} from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const data = request.body;

        const updateUserService = new UpdateUserService();

        try{
            await updateUserService.execute(id, data);
            return response.status(200).send();
        } catch(e) {
            let statusCode = 400;
            if(e.message === "User not found!") statusCode = 404;
            return response.status(statusCode).send(e.message)
        }
    }
}

export { UpdateUserController }