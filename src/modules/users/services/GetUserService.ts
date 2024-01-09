import { UserOutputDto } from "../dtos/UserOutputDto";
import { usersRepository } from "../repositories/usersRepository";

class GetUserService {
    async execute(id: string):Promise<UserOutputDto> {
        const user = await usersRepository.findOne({
            where: {
                id
            }
        });

        if(!user) throw new Error("User not found!");

        const userOutput = new UserOutputDto(user);

        return userOutput;
    }
}

export { GetUserService }