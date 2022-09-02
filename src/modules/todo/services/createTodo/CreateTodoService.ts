import { prisma } from "../../../../databases/prismaClient";

export class CreateTodoService {
    async execute(
        title: string,
        description: string,
        completed: boolean,
        id_owner: string,
        id_project: string
    ) {
        const newTodo = await prisma.todo.create({
            data: {
                title,
                description,
                completed,
                id_owner,
                id_project,
            },
        });
        return newTodo;
    }
}
