import { prisma } from "../../../../databases/prismaClient";

export class ListTodoService {
    async execute() {
        const allTodos = await prisma.todo.findMany({
            select: {
                title: true,
                description: true,
                createdAt: true,
                completed: true,
                owner: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                project: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        return allTodos;
    }
}
