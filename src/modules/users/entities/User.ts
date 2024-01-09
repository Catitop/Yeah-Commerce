import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("users")
class User {

    @PrimaryColumn({
        type:"uuid"
    })
    id: string;

    @Column({
        type:"varchar",
        length: 80
    })
    name: string;

    @Column({
        type:"varchar",
        unique: true
    })
    email: string;

    @Column({
        type:"varchar",
    })
    password: string;

    @CreateDateColumn({
        name:"createdat"
    })
    createdAt: Date;

    @UpdateDateColumn({
        name:"updatedat"
    })
    updatedAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User }