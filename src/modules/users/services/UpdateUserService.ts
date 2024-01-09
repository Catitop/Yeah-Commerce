import { Not } from "typeorm";
import { UserInputDto } from "../dtos/UserInputDto";
import { UserOutputDto } from "../dtos/UserOutputDto";
import { usersRepository } from "../repositories/usersRepository";

import { hash } from "bcryptjs";
import { AppError } from "../../../shared/errors/AppError";

class UpdateUserService {
    async execute(id: string, {name, email, password}: UserInputDto, loggedUser: string): Promise<void> {

        if(id !== loggedUser) throw new AppError("Operation is not allowed!", 403)
        const user = await usersRepository.findById(id);

        if(!user) throw new AppError("User not found!", 404)

        if(name.length > 80) throw new AppError("Name is too long!", 422);

        const userWithSameEmail = await usersRepository.findOne({
            where: {
                email,
                id: Not(id)
            }
        });

        if(userWithSameEmail && userWithSameEmail.id !== id) throw new AppError("Email already in use!", 400);

        const passwordHash = await hash(password, 8);

        user.update({
            name,
            email,
            password: passwordHash
        });

        await usersRepository.save(user);
    }
}

export { UpdateUserService }