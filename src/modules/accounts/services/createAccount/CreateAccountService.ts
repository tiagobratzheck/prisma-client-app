import { hash } from "bcrypt";
import { prisma } from "../../../../databases/prismaClient";
import { AppError } from "../../../../infra/errors/AppError";

interface ICreateAccount {
    username: string;
    password: string;
}

export class CreateAccountService {
    async execute({ username, password }: ICreateAccount) {
        const accountExists = await prisma.account.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                },
            },
        });

        if (accountExists) {
            throw new AppError("Account already exists");
        }

        const hashPassword = await hash(password, 10);

        const account = await prisma.account.create({
            data: {
                username,
                password: hashPassword,
            },
        });

        return account;
    }
}
