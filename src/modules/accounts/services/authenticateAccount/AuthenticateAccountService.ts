import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../databases/prismaClient";
import { AppError } from "../../../../infra/errors/AppError";

interface IAuthenticateAccount {
    username: string;
    password: string;
}

export class AuthenticateAccountService {
    async execute({ username, password }: IAuthenticateAccount) {
        const account = await prisma.account.findFirst({
            where: {
                username,
            },
        });
        if (!account) {
            throw new AppError("Username or password invalid", 401);
        }

        const passwordMatch = await compare(password, account.password);
        if (!passwordMatch) {
            throw new AppError("Username or password invalid", 401);
        }

        const token = sign({ username }, "Hy76:>98i:--po:uiYY:7yh1", {
            subject: account.id,
            expiresIn: "1d",
        });

        return token;
    }
}
