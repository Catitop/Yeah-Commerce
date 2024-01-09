import { AppError } from "../../../shared/errors/AppError";
import { usersRepository } from "../repositories/usersRepository";

class DeleteUserService {
    async execute(id: string, loggedUser: string):Promise<void> {
        const user = await usersRepository.findById(id);

        if(!user) throw new AppError("User does not exist!", 404);

        if(id !== loggedUser) throw new AppError("Operation is not allowed!", 403);

        await usersRepository.softDelete(id); 
    }
}

export { DeleteUserService }