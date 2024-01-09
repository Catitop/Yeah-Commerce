import { usersRepository } from "../repositories/usersRepository";

class DeleteUserService {
    async execute(id: string):Promise<void> {
        const user = await usersRepository.findById(id);

        if(!user) throw new Error("User does not exist!")

        await usersRepository.softDelete(id); 
    }
}

export { DeleteUserService }