import { UserInputDto } from "../dtos/UserInputDto";
import { UserOutputDto } from "../dtos/UserOutputDto";
import { usersRepository } from "../repositories/usersRepository";

import { hash } from "bcryptjs";

class UpdateUserService {
    async execute(id: string, {name, email, password}: UserInputDto): Promise<void> {

        const user = await usersRepository.findById(id);

        if(name.length > 80) throw new Error("Name is too long!");

        const userWithSameEmail = await usersRepository.findByEmail(email);

        if(userWithSameEmail) throw new Error("Email already in use!");

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