import "reflect-metadata";
import express from "express";
import "./database/data-source";

const app = express();

app.get('/', (request, response) => {
    return response.status(200).send("Hello World!");
})

app.listen(3000, () => {
    console.log("App started at port 3000!")
});
