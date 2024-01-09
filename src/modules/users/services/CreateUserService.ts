import { UserInputDto } from "../dtos/UserInputDto";
import { UserOutputDto } from "../dtos/UserOutputDto";
import { User } from "../entities/User";
import { usersRepository } from "../repositories/usersRepository";

import { hash } from "bcryptjs";

class CreateUserService {
    async execute({name, email, password}: UserInputDto): Promise<UserOutputDto | Error> {
        const userWithSameEmail = await usersRepository.findOne({
            where: {
                email
            }
        });

        if(userWithSameEmail) return new Error("User already exists!");

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash
        });

        await usersRepository.save(user);

        const userOutput = new UserOutputDto(user);

        return userOutput;
    }
}

export { CreateUserService }