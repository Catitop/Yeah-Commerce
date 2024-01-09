import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) return response.status(401).send("JWT token is missing!");

    const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        const { sub } = decoded;

        request.user = {
            id: sub as string
        }
        return next();
    } catch {
        return response.status(401).send("Invalid JWT token!");
    }

}