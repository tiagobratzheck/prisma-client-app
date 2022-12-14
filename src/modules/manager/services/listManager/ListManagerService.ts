import { prisma } from "../../../../databases/prismaClient";

export class ListManagerService {
    async execute(name: string) {
        const manager = await prisma.manager.findFirst({
            where: {
                name,
            },
            select: {
                name: true,
                department: true,
                Projects: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        return manager;
    }
}
