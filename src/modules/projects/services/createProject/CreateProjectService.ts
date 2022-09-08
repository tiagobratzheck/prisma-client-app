import { prisma } from "../../../../databases/prismaClient";
import { AppError } from "../../../../infra/errors/AppError";

export class CreateProjectService {
    async execute(
        name: string,
        description: string,
        requirements: string,
        previousDate: Date,
        id_manager: string
    ) {
        const projectExist = await prisma.project.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive",
                },
            },
        });

        if (projectExist) {
            throw new AppError("The project name is already registered");
        }

        const newProject = await prisma.project.create({
            data: {
                name,
                description,
                requirements,
                previousDate: new Date(previousDate),
                id_manager,
            },
        });
        return newProject;
    }
}
