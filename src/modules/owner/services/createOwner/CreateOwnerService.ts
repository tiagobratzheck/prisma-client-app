import { prisma } from "../../../../databases/prismaClient";
import { AppError } from "../../../../infra/errors/AppError";

export class CreateOwnerService {
    async execute(name: string) {
        const ownerExist = await prisma.owner.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive",
                },
            },
        });

        if (ownerExist) {
            throw new AppError("Owner is already registered");
        }

        const newOwner = await prisma.owner.create({
            data: {
                name,
            },
        });
        return newOwner;
    }
}
