import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { CreateUserSessionDto } from "../dtos/CreateUserSessionDto";
import { usersRepository } from "../repositories/usersRepository";

class CreateSessionService {
    async execute({email, password}: CreateUserSessionDto): Promise<string> {
        const user = await usersRepository.findByEmail(email);

        if(!user) throw new Error("Email or password incorrect!");

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) throw new Error("Email or password incorrect!");

        const token = sign({}, "1f05234e-eee1-485b-a883-a31f25e0ef6e", {
            subject: user.id,
            expiresIn: '1d'
        });

        return token;
    }
};

export { CreateSessionService }