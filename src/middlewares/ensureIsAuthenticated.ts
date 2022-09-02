import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureIsAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Token is missing",
        });
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "Hy76:>98i:--po:uiYY:7yh1") as IPayload;
        request.id_account = sub;

        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token invalid",
        });
    }
}
