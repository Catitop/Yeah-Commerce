import { usersRepository } from "../repositories/usersRepository";

class DeleteUserService {
    async execute(id: string, loggedUser: string):Promise<void> {
        const user = await usersRepository.findById(id);

        if(!user) throw new Error("User does not exist!");

        if(id !== loggedUser) throw new Error("Operation is not allowed!");

        await usersRepository.softDelete(id); 
    }
}

export { DeleteUserService }