import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import "./database/data-source";
import { usersRouter } from "./modules/users/routes/users.routes";
import { AppError } from "./shared/errors/AppError";

const app = express();

app.use(express.json());

app.use(usersRouter);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return response.status(error.status).send({
            status: 'error',
            message: error.message
        });
    }

    return response.status(500).send({
        status: 'error',
        message: 'Internal Server Error!'
    });
});

app.get('/', (request, response) => {
    return response.status(200).send("Hello World!");
})

app.listen(3000, () => {
    console.log("App started at port 3000!")
});
