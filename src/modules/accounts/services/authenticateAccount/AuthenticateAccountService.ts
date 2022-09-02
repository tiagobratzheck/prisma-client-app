import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../databases/prismaClient";

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
            throw new Error("Username or password invalid");
        }

        const passwordMatch = await compare(password, account.password);
        if (!passwordMatch) {
            throw new Error("Username or password invalid");
        }

        const token = sign({ username }, "Hy76:>98i:--po:uiYY:7yh1", {
            subject: account.id,
            expiresIn: "1d",
        });

        return token;
    }
}
