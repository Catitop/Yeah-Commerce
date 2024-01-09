import { User } from "../entities/User";


class UserOutputDto {
    name: string;
    email: string;

    constructor(user: User) {
        this.name = user.name;
        this.email = user.email;
    }
}

export { UserOutputDto }