import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "./database/data-source";
import { usersRouter } from "./modules/users/routes/users.routes";

const app = express();

app.use(express.json());

app.use(usersRouter);


app.get('/', (request, response) => {
    return response.status(200).send("Hello World!");
})

app.listen(3000, () => {
    console.log("App started at port 3000!")
});
