import { Request, Response } from "express";
import { GetUserService } from "../services/GetUserService";

class GetUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getUserService = new GetUserService();

        try {
            const user = await getUserService.execute(id);
            return response.status(200).send(user);
        } catch (e) {
            return response.status(400).send(e.message);
        }

        
    }
}

export { GetUserController }