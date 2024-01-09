import { AppDataSource } from "../../../database/data-source";
import { User } from "../entities/User";

export const usersRepository = AppDataSource.getRepository(User).extend({
    async findByEmail(email: string): Promise<User> {
        return this.createQueryBuilder("user")
            .where("user.email = :email", {email})
            .getOne();
    },
    async findById(id: string): Promise<User> {
        return this.createQueryBuilder("user")
            .where("user.id = :id", {id})
            .getOne();
    }
})