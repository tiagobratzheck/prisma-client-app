import { prisma } from "../../../../databases/prismaClient";
import { AppError } from "../../../../infra/errors/AppError";

export class UpdateProjectService {
    async execute(id: string) {
        const checkTodos = await prisma.todo.findFirst({
            where: {
                id_project: id,
                completed: false,
            },
        });

        if (checkTodos) {
            throw new AppError("There are todos to complete for this project");
        }

        const updatedProject = await prisma.project.update({
            where: {
                id: id,
            },
            data: {
                finished: true,
                updatedAt: new Date(),
            },
        });

        return updatedProject;
    }
}
