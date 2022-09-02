import { hash } from "bcrypt";
import { prisma } from "../../../../databases/prismaClient";

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
            throw new Error("Account already exists");
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
