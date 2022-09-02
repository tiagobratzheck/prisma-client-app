import { PrismaClient } from "@prisma/client";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./src/infra/http/index.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
);

app.get("/", (request, response) => {
    return response.json({
        msg: "Server running",
    });
});

app.listen(3000, () => console.log("Server UP"));
