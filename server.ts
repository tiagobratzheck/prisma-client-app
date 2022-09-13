import { PrismaClient } from "@prisma/client";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "./src/infra/errors/AppError";
import { router } from "./src/infra/http/index.routes";
import { errors } from "celebrate";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errors());

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.get("/", (request, response) => {
    return response.json({
        msg: "Server running",
    });
});

app.listen(3000, () => console.log("Server UP"));
