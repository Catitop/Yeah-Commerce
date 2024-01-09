import { Not } from "typeorm";
import { UserInputDto } from "../dtos/UserInputDto";
import { UserOutputDto } from "../dtos/UserOutputDto";
import { usersRepository } from "../repositories/usersRepository";

import { hash } from "bcryptjs";

class UpdateUserService {
    async execute(id: string, {name, email, password}: UserInputDto, loggedUser: string): Promise<void> {

        if(id !== loggedUser) throw new Error("Operation is not allowed!")
        const user = await usersRepository.findById(id);

        if(!user) throw new Error("User not found!")

        if(name.length > 80) throw new Error("Name is too long!");

        const userWithSameEmail = await usersRepository.findOne({
            where: {
                email,
                id: Not(id)
            }
        });

        if(userWithSameEmail && userWithSameEmail.id !== id) throw new Error("Email already in use!");

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