import { Request, Response} from "express";
import { CreateSessionService } from "../services/CreateSessionService";

class CreateSessionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createSessionService = new CreateSessionService();

        try {
            const token = await createSessionService.execute(data);
            return response.status(200).send({token});
        } catch(e) {
            return response.status(403).send(e.message)
        };
    }
};

export { CreateSessionController }