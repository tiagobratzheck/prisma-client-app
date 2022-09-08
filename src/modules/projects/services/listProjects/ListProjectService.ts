import { prisma } from "../../../../databases/prismaClient";

export class ListProjectService {
    async execute(id: string) {
        const project = await prisma.project.findFirst({
            where: {
                id: id,
            },
            select: {
                name: true,
                description: true,
                requirements: true,
                createdAt: true,
                previousDate: true,
                manager: true,
                Todos: true,
            },
        });

        return project;
    }
}
