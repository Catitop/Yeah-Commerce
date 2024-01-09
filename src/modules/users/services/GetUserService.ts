import { AppError } from "../../../shared/errors/AppError";
import { UserOutputDto } from "../dtos/UserOutputDto";
import { usersRepository } from "../repositories/usersRepository";

class GetUserService {
    async execute(id: string):Promise<UserOutputDto> {
        const user = await usersRepository.findOne({
            where: {
                id
            }
        });

        if(!user) throw new AppError("User not found!", 404);

        const userOutput = new UserOutputDto(user);

        return userOutput;
    }
}

export { GetUserService }