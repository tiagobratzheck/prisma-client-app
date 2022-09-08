import { prisma } from "../../../../databases/prismaClient";
import { AppError } from "../../../../infra/errors/AppError";

export class CreateManagerService {
    async execute(name: string, department: string) {
        const managerExist = await prisma.manager.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive",
                },
            },
        });

        if (managerExist) {
            throw new AppError("Manager is already registered");
        }

        const newManager = await prisma.manager.create({
            data: {
                name,
                department,
            },
        });
        return newManager;
    }
}
