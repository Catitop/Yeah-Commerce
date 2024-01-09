import { User } from "../entities/User";


class UserOutputDto {
    id: string;
    name: string;
    email: string;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
    }
}

export { UserOutputDto }