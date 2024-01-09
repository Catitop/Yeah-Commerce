import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { CreateUserSessionDto } from "../dtos/CreateUserSessionDto";
import { usersRepository } from "../repositories/usersRepository";
import { AppError } from "../../../shared/errors/AppError";

class CreateSessionService {
    async execute({email, password}: CreateUserSessionDto): Promise<string> {
        const user = await usersRepository.findByEmail(email);

        if(!user) throw new AppError("Email or password incorrect!", 401);

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) throw new AppError("Email or password incorrect!", 401);

        const token = sign({}, process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: '1d'
        });

        return token;
    }
};

export { CreateSessionService }