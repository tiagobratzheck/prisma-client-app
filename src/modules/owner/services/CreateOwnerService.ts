import { prisma } from "../../../databases/prismaClient";

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
            throw new Error("Owner is already registered");
        }

        const newOwner = await prisma.owner.create({
            data: {
                name,
            },
        });
        return newOwner;
    }
}
